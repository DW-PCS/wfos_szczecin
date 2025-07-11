import useFontSize from '@/hooks/useFontSize';
import useToggleContrast from '@/hooks/useToggleContrast';
import { cn } from '@/lib/cn';

function AccessibilityControlsDesktop() {
  const { isHighContrast, toggleHighContrast } = useToggleContrast();
  const { decreaseFontSize, resetFontSize, increaseFontSize } = useFontSize();

  const buttonBaseClasses = 'px-3 py-1 text-sm font-medium rounded transition-colors';
  const buttonDefaultClasses =
    'text-gray-600 hover:text-primary-green hover:bg-gray-50 cursor-pointer';
  const buttonActiveClasses = 'bg-primary-green text-white';

  return (
    <div className="hidden lg:flex items-center space-x-2">
      <button
        onClick={decreaseFontSize}
        className={cn(buttonBaseClasses, buttonDefaultClasses)}
        title="Zmniejsz czcionkę"
        aria-label="Zmniejsz rozmiar czcionki"
      >
        A-
      </button>

      <button
        onClick={resetFontSize}
        className={cn(buttonBaseClasses, buttonDefaultClasses)}
        title="Domyślny rozmiar czcionki"
        aria-label="Resetuj rozmiar czcionki"
      >
        A
      </button>

      <button
        onClick={increaseFontSize}
        className={cn(buttonBaseClasses, buttonDefaultClasses)}
        title="Powiększ czcionkę"
        aria-label="Zwiększ rozmiar czcionki"
      >
        A+
      </button>

      <button
        onClick={toggleHighContrast}
        className={cn(
          buttonBaseClasses,
          'cursor-pointer',
          isHighContrast ? buttonActiveClasses : buttonDefaultClasses
        )}
        title="Przełącz tryb wysokiego kontrastu"
        aria-label={isHighContrast ? 'Wyłącz wysoki kontrast' : 'Włącz wysoki kontrast'}
      >
        {isHighContrast ? 'Normalny' : 'Kontrast'}
      </button>
    </div>
  );
}

export default AccessibilityControlsDesktop;
