import {
  getSession,
  getUserDetails,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
import Main from '@/components/dashboard/main';
import { redirect } from 'next/navigation';

export default async function Account() {
  const [session, userDetails, products, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  // if (!session) {
  //   return redirect('/dashboard/signin');
  // }

  return (
    // @ts-ignore
    <Main
      session={session}
      userDetails={userDetails}
      user={session?.user}
      products={products}
      subscription={subscription}
    />
  );
}
