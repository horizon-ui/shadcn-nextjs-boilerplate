import {
  getSession,
  getUserDetails,
  getSubscription,
} from '@/app/supabase-server';
import { redirect } from 'next/navigation';

export default async function Account() {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription(),
  ]);

  if (!session) {
    return redirect('/dashboard/signin');
  } else {
    redirect('/dashboard/ai-chat');
  }
}
