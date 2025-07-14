interface StatsCardContentProps {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function StatsCardContent({
  title,
  description,
  titleClassName = 'text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3',
  descriptionClassName = 'text-sm sm:text-base text-gray-600 leading-relaxed',
}: StatsCardContentProps) {
  return (
    <>
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
    </>
  );
}
