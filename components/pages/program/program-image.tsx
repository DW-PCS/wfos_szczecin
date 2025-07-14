import { getCategoryDisplayName } from '@/lib/utils/programs';
import { ProgramPageType } from '@/types/program';

interface ProgramImageProps {
  program: ProgramPageType;
}

export function ProgramImage({ program }: ProgramImageProps) {
  return (
    <section className="mb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative h-64 md:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-navy mb-4">
              {program.name}
            </h2>
            <p className="text-xl text-gray-700">
              {getCategoryDisplayName(program.beneficiaryCategories)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
