import { Program } from "@/types/program";

interface ProgramCardFundingProps {
  program: Program;
}

export function ProgramCardFunding({ program }: ProgramCardFundingProps) {
  return (
    <div className="mb-4">
      <div className="text-sm text-gray-500 mb-1">Maksymalne dofinansowanie</div>
      <div className="text-2xl font-bold text-primary-green">{program.maxSupport}</div>
    </div>
  );
}
