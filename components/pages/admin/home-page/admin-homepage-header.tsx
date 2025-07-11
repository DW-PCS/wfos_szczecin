interface AdminHomepageHeaderProps {
  title?: string;
  description?: string;
}

export function AdminHomepageHeader({
  title = 'Strona główna',
  description = 'Zarządzaj treścią wyświetlaną na stronie głównej',
}: AdminHomepageHeaderProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
