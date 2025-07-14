interface BenefitCardContentProps {
  title: string;
  description: string;
  showTitle?: boolean;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function BenefitCardContent({
  title,
  description,
  showTitle = true,
  titleClassName = 'text-lg font-semibold text-gray-900',
  descriptionClassName = 'text-gray-600 leading-relaxed',
}: BenefitCardContentProps) {
  return (
    <>
      {showTitle && <h4 className={titleClassName}>{title}</h4>}
      {!showTitle && <p className={descriptionClassName}>{description}</p>}
    </>
  );
}
