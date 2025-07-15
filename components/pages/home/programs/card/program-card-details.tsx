import { Program } from '@/types/program';

const ProgramCardDetails = ({ program }: { program: Program }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="text-sm text-gray-600 mb-1">Maksymalne dofinansowanie</div>
        <div className="font-semibold text-primary-navy">
          {program.maxSupport || program.budget}
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="text-sm text-gray-600 mb-1">Termin naboru</div>
        <div className="font-semibold text-primary-navy">{program.deadline || 'Brak terminu'}</div>
      </div>
    </div>
  );
};

export default ProgramCardDetails;
