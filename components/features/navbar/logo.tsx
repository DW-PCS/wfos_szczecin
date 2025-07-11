import { Leaf } from 'lucide-react';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-primary-green rounded-lg flex items-center justify-center">
        <Leaf className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold text-primary-navy">WFOŚiGW</span>
    </Link>
  );
};
