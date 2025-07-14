import { Card, CardHeader, CardContent } from '@/components/ui/card';

export function ProgramsLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card
          key={index}
          className="group hover:shadow-lg transition-shadow duration-300 animate-pulse"
        >
          <div className="relative h-48 overflow-hidden rounded-t-lg bg-gray-200"></div>
          <CardHeader>
            <div className="w-3/4 h-6 bg-gray-200 rounded mb-2"></div>
            <div className="w-full h-4 bg-gray-200 rounded"></div>
            <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="w-full h-4 bg-gray-200 rounded"></div>
              <div className="w-full h-4 bg-gray-200 rounded"></div>
              <div className="w-full h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="mb-4">
              <div className="w-32 h-4 bg-gray-200 rounded mb-1"></div>
              <div className="w-24 h-8 bg-gray-200 rounded"></div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-10 bg-gray-200 rounded"></div>
              <div className="w-10 h-10 bg-gray-200 rounded"></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
