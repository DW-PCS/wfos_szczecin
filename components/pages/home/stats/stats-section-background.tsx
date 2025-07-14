interface StatsSectionBackgroundProps {
  backgroundImage: string | undefined
  overlayOpacity?: number;
}

export function StatsSectionBackground({
  backgroundImage,
  overlayOpacity = 0.4,
}: StatsSectionBackgroundProps) {
  return (
    <div
      className="absolute inset-x-4 top-0 bottom-0 bg-cover bg-center bg-no-repeat rounded-[32px]"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div
        className="absolute inset-0 bg-black rounded-[32px]"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
