import { getUser } from '@/utils/supabase/queries';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export default async function Dashboard() {
  const supabase = createClient();
  const [user] = await Promise.all([getUser(supabase)]);

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
  if (!user) {
    return redirect('/shadcn-nextjs-boilerplate/dashboard/signin');
  } else {
    redirect('/shadcn-nextjs-boilerplate/dashboard/main');
  }
}
