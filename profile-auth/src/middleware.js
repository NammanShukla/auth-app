import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value; 

  console.log("Token from cookies:", token);

  const { pathname } = req.nextUrl;

  if (!token) {
    if (pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/", req.url)); 
    }
    return NextResponse.next(); 
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/dashboard", req.url)); 
    }
    return NextResponse.next();
  } catch (error) {
    console.error("JWT verification error:", error);
    if (pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/", req.url)); 
    }
    return NextResponse.next();
  }
}