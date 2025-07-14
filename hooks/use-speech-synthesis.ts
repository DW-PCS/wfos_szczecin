"use client"

import { useState, useEffect, useCallback, useRef } from 'react'

interface SpeechSynthesisHookOptions {
  rate?: number
  pitch?: number
  volume?: number
  voice?: SpeechSynthesisVoice | null
  lang?: string
}

interface SpeechSynthesisHookReturn {
  speak: (text: string) => void
  stop: () => void
  pause: () => void
  resume: () => void
  isSpeaking: boolean
  isPaused: boolean
  isSupported: boolean
  voices: SpeechSynthesisVoice[]
  currentVoice: SpeechSynthesisVoice | null
  setVoice: (voice: SpeechSynthesisVoice) => void
  rate: number
  setRate: (rate: number) => void
  volume: number
  setVolume: (volume: number) => void
  pitch: number
  setPitch: (pitch: number) => void
}

export function useSpeechSynthesis(options: SpeechSynthesisHookOptions = {}): SpeechSynthesisHookReturn {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [currentVoice, setCurrentVoice] = useState<SpeechSynthesisVoice | null>(null)
  const [rate, setRate] = useState(options.rate || 1)
  const [volume, setVolume] = useState(options.volume || 1)
  const [pitch, setPitch] = useState(options.pitch || 1)
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  
  // Check if Speech Synthesis is supported
  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

  // Load only Polish voices
  useEffect(() => {
    if (!isSupported) return

    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices()
      
      // Filter only Polish voices
      const polishVoices = availableVoices.filter(voice => 
        voice.lang.startsWith('pl') || 
        voice.lang.includes('Polish') ||
        voice.name.toLowerCase().includes('polish') ||
        voice.name.toLowerCase().includes('polski')
      )
      
      setVoices(polishVoices)
      
      // Set first Polish voice as default
      const defaultVoice = polishVoices[0] || null
      setCurrentVoice(defaultVoice)
    }

    // Load voices immediately if available
    loadVoices()
    
    // Listen for voices changed event (some browsers load voices asynchronously)
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices
    }

    return () => {
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = null
      }
    }
  }, [isSupported])

  // Clean text for better speech synthesis
  const cleanTextForSpeech = useCallback((text: string): string => {
    return text
      // Remove HTML tags
      .replace(/<[^>]*>/g, ' ')
      // Replace HTML entities
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, 'i')
      .replace(/&lt;/g, 'mniej niż')
      .replace(/&gt;/g, 'więcej niż')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      // Clean up whitespace
      .replace(/\s+/g, ' ')
      .trim()
  }, [])

  const speak = useCallback((text: string) => {
    if (!isSupported || !text.trim()) return

    // Stop any current speech with better error handling
    try {
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel()
        // Wait a bit for cancellation to complete before starting new speech
        setTimeout(() => {
          startNewSpeech(text)
        }, 100)
        return
      }
    } catch (error) {
      console.warn('Error cancelling previous speech:', error)
    }

    startNewSpeech(text)
  }, [isSupported, currentVoice, rate, volume, pitch, options.lang, cleanTextForSpeech])

  const startNewSpeech = useCallback((text: string) => {
    const cleanedText = cleanTextForSpeech(text)
    if (!cleanedText) return

    const utterance = new SpeechSynthesisUtterance(cleanedText)
    
    // Set voice and speech parameters
    if (currentVoice) {
      utterance.voice = currentVoice
    }
    utterance.rate = rate
    utterance.volume = volume
    utterance.pitch = pitch
    utterance.lang = options.lang || 'pl-PL'

    // Event handlers
    utterance.onstart = () => {
      setIsSpeaking(true)
      setIsPaused(false)
    }

    utterance.onend = () => {
      setIsSpeaking(false)
      setIsPaused(false)
      utteranceRef.current = null
    }

    utterance.onerror = (event) => {
      // Only log errors that aren't normal interruptions
      if (event.error !== 'interrupted' && event.error !== 'canceled') {
        console.error('Speech synthesis error:', event.error)
      }
      setIsSpeaking(false)
      setIsPaused(false)
      utteranceRef.current = null
    }

    utterance.onpause = () => {
      setIsPaused(true)
    }

    utterance.onresume = () => {
      setIsPaused(false)
    }

    utteranceRef.current = utterance
    
    try {
      speechSynthesis.speak(utterance)
    } catch (error) {
      console.error('Failed to start speech synthesis:', error)
      setIsSpeaking(false)
      setIsPaused(false)
      utteranceRef.current = null
    }
  }, [currentVoice, rate, volume, pitch, options.lang, cleanTextForSpeech])

  const stop = useCallback(() => {
    if (!isSupported) return
    
    try {
      speechSynthesis.cancel()
    } catch (error) {
      console.warn('Error stopping speech synthesis:', error)
    }
    
    setIsSpeaking(false)
    setIsPaused(false)
    utteranceRef.current = null
  }, [isSupported])

  const pause = useCallback(() => {
    if (!isSupported || !isSpeaking) return
    
    try {
      speechSynthesis.pause()
      setIsPaused(true)
    } catch (error) {
      console.warn('Error pausing speech synthesis:', error)
    }
  }, [isSupported, isSpeaking])

  const resume = useCallback(() => {
    if (!isSupported || !isPaused) return
    
    try {
      speechSynthesis.resume()
      setIsPaused(false)
    } catch (error) {
      console.warn('Error resuming speech synthesis:', error)
    }
  }, [isSupported, isPaused])

  const setVoice = useCallback((voice: SpeechSynthesisVoice) => {
    setCurrentVoice(voice)
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isSupported) {
        try {
          speechSynthesis.cancel()
        } catch (error) {
          console.warn('Error cleaning up speech synthesis:', error)
        }
      }
    }
  }, [isSupported])

  return {
    speak,
    stop,
    pause,
    resume,
    isSpeaking,
    isPaused,
    isSupported,
    voices,
    currentVoice,
    setVoice,
    rate,
    setRate,
    volume,
    setVolume,
    pitch,
    setPitch,
  }
} 