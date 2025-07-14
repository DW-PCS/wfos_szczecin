import Link from 'next/link';

export default function SkipLinks() {
  return (
    <div className="skip-links">
      <Link href="#main-content">Przejdź do treści głównej</Link>
      <Link href="#main-navigation">Przejdź do nawigacji</Link>
      {/* <Link href="#main-menu">
        Przejdź do menu
      </Link> */}
    </div>
  );
}
