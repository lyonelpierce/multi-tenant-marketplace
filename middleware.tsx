import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

const reservedSubdomains = [
  "clkmail",
  "clk2._domainkey",
  "clk._domainkey",
  "accounts",
  "clerk",
  "purelymail3._domainkey",
  "purelymail2._domainkey",
  "purelymail1._domainkey",
  "_dmarc",
];

const isDashboardRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isDashboardRoute(req)) auth().protect();

  const url = req.nextUrl;

  // Get HostName
  let hostname = req.headers
    .get("host")!
    .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  hostname = hostname.replace("www.", "");

  // Get Pathname
  const searchParams = req.nextUrl.searchParams.toString();
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  // If landing route
  if (
    hostname === "localhost:3000" ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ) {
    return NextResponse.rewrite(
      new URL(`${path === "/" ? "" : path}`, req.url)
    );
  }

  // Check if matches reserved domains
  if (
    reservedSubdomains.some(
      (subdomain) =>
        hostname === `${subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
    )
  ) {
    return NextResponse.redirect(url);
  }

  // Rewrite everything else to `/[domain]/[slug] dynamic route
  return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
});
