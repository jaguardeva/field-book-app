import { NextResponse } from "next/server";
import { auth } from "./auth";

export const proxy = auth((req) => {
  const isLoggedIn = !!req.auth;

  const guestRoutes = ["/login", "/register"];

  const protectedRoutes = ["/dashboard"];

  const pathname = req.nextUrl.pathname;

  // redirect logged in user away from auth pages
  if (isLoggedIn && guestRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // protect dashboard
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (!isLoggedIn && isProtected) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
