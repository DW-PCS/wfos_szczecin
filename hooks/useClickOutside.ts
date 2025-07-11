import { useEffect, useRef, type RefObject } from 'react';

type UseClickOutsideOptions = {
  enabled?: boolean;
  ignoredElements?: RefObject<HTMLElement | null>[];
};

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  handler: () => void,
  options: UseClickOutsideOptions = {}
): RefObject<T | null> {
  const ref = useRef<T | null>(null);
  const { enabled = true, ignoredElements = [] } = options;

  useEffect(() => {
    if (!enabled) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (ref.current?.contains(target)) return;

      const isInsideIgnored = ignoredElements.some(ignoredRef =>
        ignoredRef.current?.contains(target)
      );

      if (!isInsideIgnored) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [handler, enabled, ignoredElements]);

  return ref;
}
