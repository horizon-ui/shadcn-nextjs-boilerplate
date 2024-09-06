import { createServerClient, type CookieMethodsServer } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Database } from '@/types/types_db';

// Define a function to create a Supabase client for server-side operations
// The function takes a cookie store created with next/headers cookies as an argument
export const createClient = () => {
  const cookieStore = cookies();
  return createServerClient<Database>(
    // Pass Supabase URL and anonymous key from the environment to the client
    // process.env.NEXT_PUBLIC_SUPABASE_URL!,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwdW1yd2VxaXN2anZxeGRvbHR1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTYyMTYyNSwiZXhwIjoyMDMxMTk3NjI1fQ.hDpNR4AnTe9WP78T1whEkyh9vy8Yah5ahYKZhZKB4ro",
    // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwdW1yd2VxaXN2anZxeGRvbHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MjE2MjUsImV4cCI6MjAzMTE5NzYyNX0.FeMFgqJyZ0ZJYi4oqHRFmSZSdURwtMI1mbIToN5fx20",

    // Define a cookies object with methods for interacting with the cookie store and pass it to the client
    {
      cookies: {
        // The getAll method is used to cookies by name
        getAll() {
          return cookieStore.getAll()
        },
        // The setAll method is used to cookies with a given name, value, and options
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value }) => cookieStore.set(name, value))
          } catch (error) {
            // If the set method is called from a Server Component, an error may occur
            // This can be ignored if there is middleware refreshing user sessions
          }
        },
        // The remove method is used to delete a cookie by its name 
      } as CookieMethodsServer
    }
  );
};