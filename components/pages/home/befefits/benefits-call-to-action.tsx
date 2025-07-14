import { Button } from '@/components/ui/button';

interface BenefitsCallToActionProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function BenefitsCallToAction({
  text = 'Rozpocznij współpracę',
  href,
  onClick,
  className = 'bg-primary-green hover:bg-primary-lime text-white px-8 py-4 rounded-xl text-lg font-medium',
}: BenefitsCallToActionProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <div className="text-center">
      <Button className={className} onClick={handleClick}>
        {text}
      </Button>
    </div>
  );
}
