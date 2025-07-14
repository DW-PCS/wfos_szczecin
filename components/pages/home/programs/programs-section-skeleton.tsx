import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProgramsSectionSkeleton = () => {
  return Array.from({ length: 4 }).map((_, index) => (
    <Card
      key={index}
      className="hover:shadow-lg transition-all duration-300 border-0 shadow-md rounded-3xl relative overflow-hidden animate-pulse"
    >
      <div className="absolute top-6 right-6 z-10">
        <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
      </div>
      <CardHeader className="pb-4 pr-24">
        <div className="flex items-start">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            <div>
              <div className="w-32 h-6 bg-gray-200 rounded mb-2"></div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="w-full h-4 bg-gray-200 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
        <div className="grid grid-cols-2 gap-4 py-3 border-t border-gray-100">
          <div>
            <div className="w-20 h-3 bg-gray-200 rounded mb-1"></div>
            <div className="w-24 h-4 bg-gray-200 rounded"></div>
          </div>
          <div>
            <div className="w-16 h-3 bg-gray-200 rounded mb-1"></div>
            <div className="w-20 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <div className="flex-1 h-10 bg-gray-200 rounded-xl"></div>
          <div className="flex-1 h-10 bg-gray-200 rounded-xl"></div>
        </div>
      </CardContent>
    </Card>
  ));
};

export default ProgramsSectionSkeleton;
