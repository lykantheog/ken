import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res: res });
  const { data } = await supabase.auth.getSession();
  const url = new URL(req.url);
  if (
    (url.pathname === "/login" || url.pathname === "/create-profile") &&
    data.session
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return res;
}

export const config = {
  matcher: ["/api/trpc/:path*", "/login/:path*", "/create-profile/:path*"],
};
