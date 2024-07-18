import {
  getSession,
  getUserDetails,
  getSubscription
} from '@/app/supabase-server';
import { redirect } from 'next/navigation';

export default async function Account() {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription()
  ]);

  if (!session) {
    return redirect(
      'https://horizon-ui.com/shadcn-nextjs-boilerplate/dashboard/signin'
    );
  } else {
    redirect('https://horizon-ui.com/shadcn-nextjs-boilerplate/dashboard/main');
  }
}
