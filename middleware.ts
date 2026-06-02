import { NextResponse, type NextRequest } from "next/server";

const legacyPostPathPattern = /^\/(\d{4})\/(\d{2})\/(\d{2})\/([^/]+?)(?:\.html)?\/?$/;

export function middleware(request: NextRequest) {
  const match = request.nextUrl.pathname.match(legacyPostPathPattern);

  if (!match) {
    return NextResponse.next();
  }

  const slug = match[4];
  const url = request.nextUrl.clone();
  url.pathname = `/posts/${encodeURIComponent(decodeURIComponent(slug))}`;

  return NextResponse.redirect(url, 308);
}
