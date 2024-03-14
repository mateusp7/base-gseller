import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('vendure.token')?.value

  if (request.nextUrl.pathname.startsWith('/login')) return NextResponse.next()

  if (request.nextUrl.pathname === '/')
    return NextResponse.redirect(new URL('/login', request.url))

  if (!request.nextUrl.pathname.startsWith('/login') && !token)
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|login/*|favicon.ico).*)']
}
