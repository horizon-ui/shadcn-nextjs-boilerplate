import { getUser } from '@/utils/supabase/queries';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export default async function Dashboard() {
  const supabase = createClient();
  const [user] = await Promise.all([getUser(supabase)]);

  if (!user) {
    return redirect('/shadcn-nextjs-boilerplate/dashboard/signin');
  } else {
    redirect('/shadcn-nextjs-boilerplate/dashboard/main');
  }
}
