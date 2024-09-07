import { useRouter } from 'next/router'; // Import useRouter from Next.js
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client for client-side usage
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const router = useRouter(); // Initialize router for navigation

const handleSignOut = async () => {
  const { error } = await supabase.auth.signOut(); // Sign out user with Supabase
  if (error) {
    console.error('Error signing out:', error);
  } else {
    // Redirect to the sign-in page after successful sign-out
    router.push('/shadcn-nextjs-boilerplate/dashboard/signin');
  }
};

export default handleSignOut;
