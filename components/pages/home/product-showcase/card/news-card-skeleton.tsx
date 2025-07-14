export function NewsCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 h-[480px] md:h-[460px] lg:h-[480px] flex flex-col mx-auto md:mx-0 max-w-sm md:max-w-none w-full animate-pulse">
      <div className="h-48 md:h-44 lg:h-48 bg-gray-200 flex-shrink-0"></div>
      <div className="p-6 md:p-5 lg:p-6 flex flex-col flex-grow">
        <div className="h-4 bg-gray-200 rounded mb-3 w-24"></div>
        <div className="h-6 bg-gray-200 rounded mb-3"></div>
        <div className="h-4 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-24 mt-auto"></div>
      </div>
    </div>
  );
}
