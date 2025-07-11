import useFontSize from '@/hooks/useFontSize';
import useToggleContrast from '@/hooks/useToggleContrast';
import { cn } from '@/lib/cn';

function AccessibilityControlsMobile() {
  const { isHighContrast, toggleHighContrast } = useToggleContrast();
  const { decreaseFontSize, resetFontSize, increaseFontSize } = useFontSize();

  const buttonBaseClasses =
    'px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded transition-colors';
  const buttonDefaultClasses = 'text-gray-600 hover:text-primary-green hover:bg-gray-50';
  const buttonActiveClasses = 'bg-primary-green text-white';

  return (
    <div className="flex items-center justify-center space-x-1 sm:space-x-2 pt-4 border-t border-gray-100">
      <span className="text-sm text-gray-600 mr-2">Rozmiar czcionki:</span>

      <button
        onClick={decreaseFontSize}
        className={cn(buttonBaseClasses, buttonDefaultClasses)}
        aria-label="Zmniejsz rozmiar czcionki"
      >
        A-
      </button>

      <button
        onClick={resetFontSize}
        className={cn(buttonBaseClasses, buttonDefaultClasses)}
        aria-label="Resetuj rozmiar czcionki"
      >
        A
      </button>

      <button
        onClick={increaseFontSize}
        className={cn(buttonBaseClasses, buttonDefaultClasses)}
        aria-label="Zwiększ rozmiar czcionki"
      >
        A+
      </button>

      <button
        onClick={toggleHighContrast}
        className={cn(
          buttonBaseClasses,
          isHighContrast ? buttonActiveClasses : buttonDefaultClasses
        )}
        aria-label={isHighContrast ? 'Wyłącz wysoki kontrast' : 'Włącz wysoki kontrast'}
      >
        {isHighContrast ? 'Normalny' : 'Kontrast'}
      </button>
    </div>
  );
}

export default AccessibilityControlsMobile;
