import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroContentProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  hasBackgroundImage?: boolean;
}

export function HeroContent({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  hasBackgroundImage = false,
}: HeroContentProps) {
  // Adjust text colors based on background image - improved mobile sizing
  const titleClasses = hasBackgroundImage
    ? 'text-[28px] xs:text-[32px] sm:text-[45px] lg:text-[57px] font-bold text-white leading-tight px-2 sm:px-0'
    : 'text-[28px] xs:text-[32px] sm:text-[45px] lg:text-[57px] font-bold text-gray-900 leading-tight px-2 sm:px-0';

  const subtitleClasses = hasBackgroundImage
    ? 'text-[14px] xs:text-[15px] sm:text-[18px] text-white/90 leading-relaxed px-2 sm:px-0 max-w-2xl'
    : 'text-[14px] xs:text-[15px] sm:text-[18px] text-gray-600 leading-relaxed px-2 sm:px-0 max-w-2xl';

  return (
    <div className="space-y-6 sm:space-y-8">
      <h1 className={titleClasses} dangerouslySetInnerHTML={{ __html: title }} />

      <p className={subtitleClasses}>{subtitle}</p>

      {/* Buttons Section - improved mobile layout */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 px-2 sm:px-0">
        {primaryButtonText && primaryButtonUrl && (
          <Button
            size="lg"
            className="bg-primary-green hover:bg-primary-lime text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            asChild
          >
            <Link href={primaryButtonUrl}>{primaryButtonText}</Link>
          </Button>
        )}

        {secondaryButtonText && secondaryButtonUrl && (
          <Button
            size="lg"
            variant="outline"
            className={`font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 text-sm sm:text-base ${
              hasBackgroundImage
                ? 'border-white text-black hover:bg-white hover:text-black'
                : 'border-primary-navy text-black hover:bg-primary-navy hover:text-white'
            }`}
            asChild
          >
            <Link href={secondaryButtonUrl}>{secondaryButtonText}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
