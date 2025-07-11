import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/aktualnosci', request.url));
  }

  if (pathname.startsWith('/admin')) {
    const isAdmin = request.cookies.get('isAdmin')?.value === 'true';

    if (!isAdmin) {
      return NextResponse.redirect(new URL('/aktualnosci', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/admin/:path*'],
};
