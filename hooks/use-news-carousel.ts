import { CarouselState } from '@/constants';
import { calculateTotalSlides, getItemsPerSlide } from '@/lib/utils/carousel';
import { useState, useEffect } from 'react';

export function useNewsCarousel(totalNewsItems: number): CarouselState {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3); // Always start with 3 for SSR consistency
  const [isClient, setIsClient] = useState(false);

  const totalSlides = calculateTotalSlides(totalNewsItems, itemsPerSlide);

  // Update items per slide on window resize
  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true);

    const handleResize = () => {
      const newItemsPerSlide = getItemsPerSlide();
      setItemsPerSlide(newItemsPerSlide);
      setCurrentSlide(0); // Reset to first slide when layout changes
    };

    // Set initial value after mount
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    const newTotalSlides = calculateTotalSlides(totalNewsItems, itemsPerSlide);
    setCurrentSlide(prev => (prev + 1) % newTotalSlides);
  };

  const prevSlide = () => {
    const newTotalSlides = calculateTotalSlides(totalNewsItems, itemsPerSlide);
    setCurrentSlide(prev => (prev - 1 + newTotalSlides) % newTotalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return {
    currentSlide,
    itemsPerSlide,
    totalSlides,
    nextSlide,
    prevSlide,
    goToSlide,
  };
}
