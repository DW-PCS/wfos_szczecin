import { useCallback } from 'react';

const FONT_SIZE_LIMITS = {
  MIN: 12,
  MAX: 24,
  DEFAULT: 16,
  STEP: 2,
} as const;

function getCurrentFontSize(): number {
  return Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function setFontSize(size: number): void {
  document.documentElement.style.fontSize = `${size}px`;
}

function useFontSize() {
  const decreaseFontSize = useCallback((): void => {
    const currentSize = getCurrentFontSize();
    if (currentSize > FONT_SIZE_LIMITS.MIN) {
      setFontSize(currentSize - FONT_SIZE_LIMITS.STEP);
    }
  }, []);

  const resetFontSize = useCallback((): void => {
    setFontSize(FONT_SIZE_LIMITS.DEFAULT);
  }, []);

  const increaseFontSize = useCallback((): void => {
    const currentSize = getCurrentFontSize();
    if (currentSize < FONT_SIZE_LIMITS.MAX) {
      setFontSize(currentSize + FONT_SIZE_LIMITS.STEP);
    }
  }, []);

  return {
    decreaseFontSize,
    resetFontSize,
    increaseFontSize,
  };
}

export default useFontSize;
