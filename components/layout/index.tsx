import Footer from '@/components/footer/FooterAdmin';
import Navbar from '@/components/navbar/NavbarAdmin';
import { routes } from '@/components/routes';
import Sidebar from '@/components/sidebar/Sidebar';
import { Toaster } from '@/components/ui/toaster';
import { getActiveRoute } from '@/utils/navigation';
import { User } from '@supabase/supabase-js';
import { usePathname } from 'next/navigation';
import Announcement from '@/components/announcement';
import { ChakraProvider } from '@chakra-ui/react';
import {
  OpenContext,
  UserContext,
  UserDetailsContext
} from '@/contexts/layout';
import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  user: User | null | undefined;
  userDetails: User | null | undefined | any;
}

const DashboardLayout: React.FC<Props> = (props: Props) => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <UserContext.Provider value={props.user}>
      <UserDetailsContext.Provider value={props.userDetails}>
        <OpenContext.Provider value={{ open, setOpen }}>
          {/* @ts-ignore */}
          <ChakraProvider>
            <div className="dark:bg-background-900 flex h-full w-full bg-white">
              <Announcement date="24 november 2024" />
              <Toaster />
              <Sidebar routes={routes} setOpen={setOpen} />
              <div className="h-full w-full dark:bg-zinc-950">
                <main
                  className={`mx-2.5 flex-none transition-all mt-[96px] md:mt-[80px] dark:bg-zinc-950 md:pr-2 xl:ml-[328px]`}
                >
                  <div className="mx-auto min-h-screen p-2 !pt-[0px] md:p-2 md:!pt-[118px]">
                    {props.children}
                  </div>
                  <Navbar brandText={getActiveRoute(routes, pathname)} />
                  <div className="p-3">
                    <Footer />
                  </div>
                </main>
              </div>
            </div>
          </ChakraProvider>
        </OpenContext.Provider>
      </UserDetailsContext.Provider>
    </UserContext.Provider>
  );
};

export default DashboardLayout;
