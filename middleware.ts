import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { decodeToken } from '@/shared/api/tokens'
import { ACCESS_TOKEN_KEY } from '@/shared/api/tokens'
import { isProtectedRoute, isPublicRoute, routes } from '@/shared/routes'

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname

  const cookie = (await cookies()).get(ACCESS_TOKEN_KEY)?.value
  const payload = cookie ? decodeToken(cookie) : null

  if (isProtectedRoute(path) && !payload?.sub) {
    return NextResponse.redirect(new URL(routes.auth.login, req.nextUrl))
  }

  if (isPublicRoute(path) && payload?.sub) {
    return NextResponse.redirect(new URL(routes.public.home, req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
