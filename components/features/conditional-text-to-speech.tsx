'use client';

import { usePathname } from 'next/navigation';
import TextToSpeechButton from './text-to-speech-button';


export default function ConditionalTextToSpeech() {
  const pathname = usePathname();

  // Nie pokazuj TextToSpeech na stronach admina
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return <TextToSpeechButton />;
}
