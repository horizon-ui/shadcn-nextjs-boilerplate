import { getSession } from '@/app/supabase-server';
import DefaultAuth from '@/components/auth';
import AuthUI from '@/components/auth/AuthUI';
import { redirect } from 'next/navigation';

export default async function SignIn() {
  const session = await getSession();

  // if (session) {
  //   return redirect('/dashboard/main');
  // }

  return (
    <DefaultAuth>
      <AuthUI />
    </DefaultAuth>
  );
}
