import { useEffect, useRef } from 'react';

interface UseStatsAnimationProps {
  enabled?: boolean;
  threshold?: number;
  staggerDelay?: number;
}

export function useStatsAnimation({
  enabled = true,
  threshold = 0.1,
  staggerDelay = 100,
}: UseStatsAnimationProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('[data-stats-card]');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
              }, index * staggerDelay);
            });
          }
        });
      },
      { threshold }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [enabled, threshold, staggerDelay]);

  return containerRef;
}
