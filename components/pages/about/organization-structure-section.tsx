interface Person {
  name: string;
  role: string;
  description?: string;
}

interface OrganizationStructureSectionProps {
  title?: string;
  subtitle?: string;
  managementBoard?: Person[];
  supervisoryBoard?: Person[];
}

const defaultManagementBoard: Person[] = [
  {
    name: 'Waldemar Miśko',
    role: 'Prezes Zarządu',
    description:
      'Doświadczony menedżer z wieloletnim stażem w zarządzaniu funduszami ekologicznymi.',
  },
  {
    name: 'Marcin Zamaro',
    role: 'Zastępca Prezesa Zarządu',
    description: 'Specjalista w dziedzinie finansów i zarządzania projektami środowiskowymi.',
  },
];

const defaultSupervisoryBoard: Person[] = [
  { name: 'Paweł Jaworski', role: 'Przewodniczący Rady Nadzorczej' },
  { name: 'Artur Nycz', role: 'Wiceprzewodniczący Rady Nadzorczej' },
  { name: 'Aneta Zaremba', role: 'Przedstawiciel NFOŚiGW' },
  { name: 'Artur Pomianowski', role: 'Przedstawiciel Ministra Klimatu' },
  { name: 'Arkadiusz Malkowski', role: 'Przedstawiciel Wojewody' },
];

export function OrganizationStructureSection({
  title = 'Struktura Organizacji',
  subtitle = 'Poznaj osoby, które kierują naszą organizacją i codziennie pracują nad realizacją naszej misji',
  managementBoard = defaultManagementBoard,
  supervisoryBoard = defaultSupervisoryBoard,
}: OrganizationStructureSectionProps) {
  return (
    <div className="mb-24">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-primary-navy mb-4">{title}</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-primary-navy">Zarząd</h4>
          </div>

          <div className="space-y-6">
            {managementBoard.map((person, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <h5 className="text-lg font-bold text-primary-navy mb-1">{person.name}</h5>
                <p className="text-primary-green font-medium text-sm mb-2">{person.role}</p>
                {person.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">{person.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-primary-navy">Rada Nadzorcza</h4>
          </div>

          <div className="space-y-4">
            {supervisoryBoard.map((member, index) => (
              <div
                key={index}
                className="p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <h5 className="font-semibold text-primary-navy text-sm">{member.name}</h5>
                <p className="text-gray-600 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
