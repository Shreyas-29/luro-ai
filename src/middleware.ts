import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // You can add conditional logic here if needed
  return NextResponse.next()
}

// (Optional) Configure routes that run this middleware
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*']
}