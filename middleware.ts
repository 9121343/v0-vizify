import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth-token")?.value
  const { pathname } = request.nextUrl

  // Protected routes that require authentication
  const protectedRoutes = ["/shop/account"]

  // Check if the requested path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))

  // Auth routes that should redirect to account if already logged in
  const authRoutes = [
    "/shop/auth/sign-in",
    "/shop/auth/create-account",
    "/shop/auth/forgot-password",
    "/shop/auth/reset-password",
  ]

  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))

  // If trying to access protected route without being logged in
  if (isProtectedRoute && !authToken) {
    return NextResponse.redirect(new URL("/shop/auth/sign-in", request.url))
  }

  // If trying to access auth routes while already logged in
  if (isAuthRoute && authToken) {
    return NextResponse.redirect(new URL("/shop/account", request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/shop/account/:path*", "/shop/auth/:path*"],
}
