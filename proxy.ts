import { NextResponse } from "next/server";
import { auth } from "./auth";

export const proxy = auth((req) => {
  const isLoggedIn = !!req.auth;

  const userRole = req.auth?.user?.role;

  const guestRoutes = ["/login", "/register"];

  const protectedRoutes = [
    {
      href: "/dashboard",
      onlyAdmin: true,
    },
    {
      href: "/profile",
      onlyAdmin: false,
    },
  ];

  const pathname = req.nextUrl.pathname;

  // redirect logged in user away from auth pages
  if (isLoggedIn && guestRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // cari route yang cocok
  const matchedRoute = protectedRoutes.find((route) =>
    pathname.startsWith(route.href),
  );

  // jika route protected dan belum login
  if (matchedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // jika route admin only tapi bukan admin
  if (matchedRoute?.onlyAdmin && userRole !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
