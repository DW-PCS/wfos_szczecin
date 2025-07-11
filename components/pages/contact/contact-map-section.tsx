interface Office {
  name: string;
  address: string;
}

interface ContactMapSectionProps {
  office: Office;
  mapUrl?: string;
  title?: string;
}

export function ContactMapSection({
  office,
  mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.8!2d14.552812!3d53.428543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa093a7b8c8b8b%3A0x1234567890abcdef!2sul.%20Solskiego%203%2C%2071-323%20Szczecin%2C%20Poland!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl',
  title = 'Znajdź nas',
}: ContactMapSectionProps) {
  return (
    <section className="py-16 sm:py-20 mt-8 relative min-h-[500px] flex items-center justify-center bg-gray-100">
      <div className="absolute inset-x-8 md:inset-x-16 lg:inset-x-32 top-0 bottom-0 rounded-[32px] overflow-hidden">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-[32px]"
        />
        <div className="absolute inset-0 bg-black/10 rounded-[32px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-end items-start pt-8 pr-8 md:pr-16 lg:pr-32">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-md">
            <h3 className="text-2xl font-bold text-primary-navy mb-2">{title}</h3>
            <p className="text-gray-600">
              {office.name}
              <br />
              {office.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
