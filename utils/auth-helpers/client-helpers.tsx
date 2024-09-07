'use client';

import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async (e) => {
    e.preventDefault(); // Client-side interaction
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      router.push('/shadcn-nextjs-boilerplate/dashboard/signin');
    }
  };

  return <div onClick={handleSignOut}>Sign Out</div>;
};

export default SignOutButton;
