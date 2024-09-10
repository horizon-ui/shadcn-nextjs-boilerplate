import { type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

export async function middleware(request: NextRequest) {

  // Function to get URL parameter by name
  function getParameterByName(name: string) {
    const url = new URL(window.location.href);
    console.log(url.searchParams.get(name));
    return url.searchParams.get(name);
  }
  // Function to set a cookie
  function setCookie(name: string, value: any, days: any) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    console.log(name, value, days);
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

  // Capture the 'ref' parameter from the URL
  const ref = getParameterByName('ref');

  // If the 'ref' parameter exists, store it in a cookie
  if (ref) {
    setCookie('creativetimref', ref, 1); // Store cookie for 1 day
  }
  
  return await updateSession(request);
  
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
};