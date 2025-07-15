'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { useCallback, useEffect, useState } from 'react';

import { useSpeechSynthesis } from '@/hooks/use-speech-synthesis';
import { Pause, Play, Settings, Square, Volume2, X } from 'lucide-react';

interface TextToSpeechButtonProps {
  className?: string;
}

export default function TextToSpeechButton({ className }: TextToSpeechButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentToRead, setContentToRead] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  const {
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
  } = useSpeechSynthesis();

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Extract text content from page
  const extractPageContent = useCallback(() => {
    // Elements to exclude from reading (icons, decorative elements, etc.)
    const excludeSelectors = [
      'svg', // SVG icons
      '.lucide', // Lucide icons
      '[aria-hidden="true"]', // Hidden decorative elements
      '.sr-only', // Screen reader only content
      '.skip-links', // Skip navigation links
      'button svg', // Icons inside buttons
      '.icon', // Generic icon classes
      '[role="img"]', // Image role elements
      'img', // Images
      'video', // Videos
      'audio', // Audio elements
      'canvas', // Canvas elements
      'script', // Script tags
      'style', // Style tags
      'noscript', // NoScript tags
      '.emoji', // Emoji elements
      '[data-emoji]', // Emoji data attributes
    ];

    // Get main content areas
    const selectors = ['main', '[role="main"]', '.content', 'article', 'section', 'div'];

    let content = '';

    for (const selector of selectors) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        // Skip if element is hidden or has no text
        const htmlElement = element as HTMLElement;
        if (htmlElement.offsetParent === null) continue;

        // Clone element to manipulate without affecting original
        const clonedElement = element.cloneNode(true) as HTMLElement;

        // Remove excluded elements (icons, SVGs, etc.)
        excludeSelectors.forEach(excludeSelector => {
          const excludedElements = clonedElement.querySelectorAll(excludeSelector);
          excludedElements.forEach(el => el.remove());
        });

        // Get text content from cleaned element
        let text = clonedElement.textContent || '';

        // Additional text cleaning for icons and symbols
        text = text
          // Remove common icon text patterns
          .replace(/[\u{1F600}-\u{1F64F}]/gu, '') // Emoticons
          .replace(/[\u{1F300}-\u{1F5FF}]/gu, '') // Misc symbols
          .replace(/[\u{1F680}-\u{1F6FF}]/gu, '') // Transport symbols
          .replace(/[\u{1F1E0}-\u{1F1FF}]/gu, '') // Flag symbols
          .replace(/[\u{2600}-\u{26FF}]/gu, '') // Misc symbols
          .replace(/[\u{2700}-\u{27BF}]/gu, '') // Dingbats
          .replace(/[\u{FE00}-\u{FE0F}]/gu, '') // Variation selectors
          // Remove single character words that might be icons
          .replace(/\b[^\w\s]\b/g, '')
          // Remove multiple spaces and clean up
          .replace(/\s+/g, ' ')
          .trim();

        if (text.length > 100) {
          // Only consider substantial content
          content += text + ' ';
        }
      }

      // If we found substantial content, break
      if (content.trim().length > 200) break;
    }

    // Fallback to body if no main content found
    if (content.trim().length < 100) {
      const bodyClone = document.body.cloneNode(true) as HTMLElement;

      // Remove excluded elements from body clone
      excludeSelectors.forEach(excludeSelector => {
        const excludedElements = bodyClone.querySelectorAll(excludeSelector);
        excludedElements.forEach(el => el.remove());
      });

      content = bodyClone.textContent || '';
    }

    // Final content cleanup
    return (
      content
        .replace(/\s+/g, ' ')
        .replace(/\n+/g, ' ')
        // Remove common navigation text that shouldn't be read
        .replace(/\b(menu|nawigacja|przejdź do|skip to|home|strona główna)\b/gi, '')
        .trim()
        .substring(0, 5000)
    ); // Limit to 5000 characters
  }, []);

  // Handle reading page content
  const handleReadPage = useCallback(() => {
    if (isSpeaking && !isPaused) {
      pause();
      return;
    }

    if (isPaused) {
      resume();
      return;
    }

    const content = extractPageContent();
    if (content) {
      setContentToRead(content);
      speak(content);
    }
  }, [isSpeaking, isPaused, pause, resume, extractPageContent, speak]);

  // Handle stop reading
  const handleStop = useCallback(() => {
    stop();
    setContentToRead('');
  }, [stop]);

  // Don't render if not mounted or not supported
  if (!isMounted || !isSupported) {
    return null;
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>

      {isExpanded && (
        <Card className="mb-4 w-80 shadow-lg">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Czytanie tekstu</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsExpanded(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>


            {currentVoice && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Głos polski</label>
                <div className="p-2 bg-gray-50 rounded text-sm text-gray-600">
                  {currentVoice.name}
                </div>
              </div>
            )}


            <div className="space-y-2">
              <label className="text-sm font-medium">Szybkość: {rate.toFixed(1)}x</label>
              <Slider
                value={[rate]}
                onValueChange={([value]: number[]) => setRate(value)}
                min={0.5}
                max={2}
                step={0.1}
                className="w-full"
              />
            </div>


            <div className="space-y-2">
              <label className="text-sm font-medium">Głośność: {Math.round(volume * 100)}%</label>
              <Slider
                value={[volume]}
                onValueChange={([value]: number[]) => setVolume(value)}
                min={0}
                max={1}
                step={0.1}
                className="w-full"
              />
            </div>


            <div className="space-y-2">
              <label className="text-sm font-medium">Wysokość: {pitch.toFixed(1)}</label>
              <Slider
                value={[pitch]}
                onValueChange={([value]: number[]) => setPitch(value)}
                min={0.5}
                max={2}
                step={0.1}
                className="w-full"
              />
            </div>


            {contentToRead && (
              <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                <p className="font-medium">Czytam:</p>
                <p className="line-clamp-2">{contentToRead.substring(0, 100)}...</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}


      <div className="flex items-center space-x-2">

        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="shadow-lg bg-white"
        >
          <Settings className="h-4 w-4" />
        </Button>

        {isSpeaking && (
          <Button variant="outline" size="sm" className="py-5 shadow-lg" onClick={handleStop}>
            <Square className="h-4 w-4" />
          </Button>
        )}

        <Button onClick={handleReadPage} className="shadow-lg" disabled={!isSupported}>
          {isSpeaking && !isPaused ? (
            <>
              <Pause className="h-4 w-4 mr-2" />
              Wstrzymaj
            </>
          ) : isPaused ? (
            <>
              <Play className="h-4 w-4 mr-2" />
              Wznów
            </>
          ) : (
            <>
              <Volume2 className="h-4 w-4 mr-2" />
              Czytaj stronę
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
