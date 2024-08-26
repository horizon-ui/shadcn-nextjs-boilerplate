import { NextRequest, NextResponse } from 'next/server';
import { parse, serialize } from 'cookie';

// Function to parse cookies from the request
export function parseCookies(req: NextRequest) {
  const cookieHeader = req.headers.get('cookie');
  return cookieHeader ? parse(cookieHeader) : {};
}

// Function to set cookies in the response
export function setCookie(
  res: NextResponse,
  name: string,
  value: any,
  options: any = {}
) {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);

  if (options.maxAge) {
    options.expires = new Date(Date.now() + options.maxAge * 1000);
  }

  res.cookies.set(name, stringValue, options);
}

// Function to get a specific cookie
export function getCookie(req: NextRequest, name: string) {
  const cookies = parseCookies(req);
  const value = cookies[name];
  if (value && value.startsWith('j:')) {
    try {
      return JSON.parse(value.slice(2));
    } catch (e) {
      return null;
    }
  }
  return value;
}
