import { useEffect, useRef } from 'react';

interface UseBenefitsAnimationProps {
  enabled?: boolean;
  threshold?: number;
  staggerDelay?: number;
}

export function useBenefitsAnimation({
  enabled = true,
  threshold = 0.1,
  staggerDelay = 100,
}: UseBenefitsAnimationProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('[data-benefit-card]');
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
