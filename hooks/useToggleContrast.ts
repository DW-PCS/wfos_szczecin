'use client';
import { useState } from 'react';

const useToggleContrast = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    if (!isHighContrast) {
      document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
      document.documentElement.style.background = '#000';
    } else {
      document.documentElement.style.filter = 'none';
      document.documentElement.style.background = '';
    }
  };
  return { isHighContrast, toggleHighContrast };
};

export default useToggleContrast;
