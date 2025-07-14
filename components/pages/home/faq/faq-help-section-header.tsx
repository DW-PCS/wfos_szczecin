interface FAQHelpSectionHeaderProps {
  title: string;
  subtitle: string;
}

export function FAQHelpSectionHeader({ title, subtitle }: FAQHelpSectionHeaderProps) {
  return (
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-lg">{subtitle}</p>
    </div>
  );
}
