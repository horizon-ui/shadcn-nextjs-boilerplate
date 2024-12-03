'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { OpenContext, UserContext } from '@/contexts/layout';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import {
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineInformationCircle,
  HiOutlineArrowRightOnRectangle
} from 'react-icons/hi2';
import { createClient } from '@/utils/supabase/client';

const supabase = createClient();
export default function HeaderLinks(props: { [x: string]: any }) {
  const { open, setOpen } = useContext(OpenContext);
  const user = useContext(UserContext);
  const { theme, setTheme } = useTheme();
  const router = getRedirectMethod() === 'client' ? useRouter() : null;
  const onOpen = () => {
    setOpen(false);
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    supabase.auth.signOut();
    router.push('/dashboard/signin');
  };

  return (
    <div className="relative flex min-w-max max-w-max flex-grow items-center justify-around gap-1 rounded-lg md:px-2 md:py-2 md:pl-3 xl:gap-2">
      <Button
        variant="outline"
        className="flex h-9 min-w-9 cursor-pointer rounded-full border-zinc-200 p-0 text-xl text-zinc-950 dark:border-zinc-800 dark:text-white md:min-h-10 md:min-w-10 xl:hidden"
        onClick={onOpen}
      >
        <FiAlignJustify className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        className="flex h-9 min-w-9 cursor-pointer rounded-full border-zinc-200 p-0 text-xl text-zinc-950 dark:border-zinc-800 dark:text-white md:min-h-10 md:min-w-10"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' ? (
          <HiOutlineMoon className="h-4 w-4 stroke-2" />
        ) : (
          <HiOutlineSun className="h-5 w-5 stroke-2" />
        )}
      </Button>

      {/* Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex h-9 min-w-9 cursor-pointer rounded-full border-zinc-200 p-0 text-xl text-zinc-950 dark:border-zinc-800 dark:text-white md:min-h-10 md:min-w-10"
          >
            <HiOutlineInformationCircle className="h-[20px] w-[20px] text-zinc-950 dark:text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 p-2">
          <a
            target="blank"
            href="https://horizon-ui.com/boilerplate-shadcn#pricing"
            className="w-full"
            // className="flex h-[44px] w-full min-w-[44px] cursor-pointer items-center rounded-lg border border-zinc-200 bg-transparent text-center text-sm font-medium text-zinc-950 duration-100 placeholder:text-zinc-950 hover:bg-gray-100 focus:bg-zinc-200 active:bg-zinc-200 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/20 dark:active:bg-white/20"
          >
            <Button variant="outline" className="mb-2 w-full">
              Pricing
            </Button>
          </a>
          <a target="blank" href="mailto:hello@horizon-ui.com">
            <Button variant="outline" className="mb-2 w-full">
              Help & Support
            </Button>
          </a>
          <a target="blank" href="/#faqs">
            <Button variant="outline" className="w-full">
              FAQs & More
            </Button>
          </a>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        onClick={(e) => handleSignOut(e)}
        variant="outline"
        className="flex h-9 min-w-9 cursor-pointer rounded-full border-zinc-200 p-0 text-xl text-zinc-950 dark:border-zinc-800 dark:text-white md:min-h-10 md:min-w-10"
      >
        <HiOutlineArrowRightOnRectangle className="h-4 w-4 stroke-2 text-zinc-950 dark:text-white" />
      </Button>
      <a className="w-full" href="/dashboard/settings">
        <Avatar className="h-9 min-w-9 md:min-h-10 md:min-w-10">
          <AvatarImage src={user?.user_metadata.avatar_url} />
          <AvatarFallback className="font-bold">
            {user?.user_metadata.full_name
              ? `${user?.user_metadata.full_name[0]}`
              : `${user?.email[0].toUpperCase()}`}
          </AvatarFallback>
        </Avatar>
      </a>
    </div>
  );
}
