import Footer from '@/components/footer/FooterAdmin';
import Navbar from '@/components/navbar/NavbarAdmin';
import { routes } from '@/components/routes';
import Sidebar from '@/components/sidebar/Sidebar';
import { Toaster } from '@/components/ui/toaster';
import { Database } from '@/types/types_db';
import { getActiveRoute } from '@/utils/navigation';
import { Session, User } from '@supabase/supabase-js';
import { usePathname } from 'next/navigation';
import React from 'react';

type Subscription = Database['public']['Tables']['subscriptions']['Row'];
type Product = Database['public']['Tables']['products']['Row'];
type Price = Database['public']['Tables']['prices']['Row'];
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}
interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  session: Session | null;
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
  userDetails: { [x: string]: any } | null;
}

const DashboardLayout: React.FC<Props> = (props: Props) => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="dark:bg-background-900 flex h-full w-full bg-white">
      <Toaster />
      <Sidebar
        routes={routes}
        session={props.session}
        userDetails={props.userDetails}
        user={props.session?.user}
        products={props.products}
        subscription={props.subscription}
        open={open}
        setOpen={() => setOpen(!open)}
      />
      <div className="h-full w-full dark:bg-zinc-950">
        <main
          className={`mx-2.5 flex-none transition-all dark:bg-zinc-950 md:pr-2 xl:ml-[328px]`}
        >
          <div className="mx-auto min-h-screen p-2 !pt-[90px] md:p-2 md:!pt-[118px]">
            {props.children}
          </div>
          <Navbar
            onOpen={() => setOpen(!open)}
            userDetails={props.userDetails}
            brandText={getActiveRoute(routes, pathname)}
          />
          <div className="p-3">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
