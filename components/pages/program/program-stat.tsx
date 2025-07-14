interface ProgramStatProps {
  value: string;
  label: string;
  color: string;
}

export function ProgramStat({ value, label, color }: ProgramStatProps) {
  return (
    <div className="text-center p-4 bg-gray-50 rounded-lg">
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
