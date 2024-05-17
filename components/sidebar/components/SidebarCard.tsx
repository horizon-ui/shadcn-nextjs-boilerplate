'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SidebarImage from '@/public/SidebarBadge.png';
import { Database } from '@/types/types_db';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { BiSolidCheckSquare } from 'react-icons/bi';
import { IoIosStar } from 'react-icons/io';

type Price = Database['public']['Tables']['prices']['Row'];
interface SidebarCard {
  [x: string]: any;
}
export default function SidebarDocs() {
  return (
    <div className="relative flex flex-col items-center rounded-lg border border-zinc-200 px-3 py-4 dark:border-white/10">
      <Image
        width="54"
        height="30"
        className="w-[54px]"
        src={SidebarImage.src}
        alt=""
      />
      <div className="mb-3 flex w-full flex-col pt-4">
        <p className="mb-2.5 text-center text-lg font-bold text-zinc-950 dark:text-white">
          Go unlimited with PRO
        </p>
        <p className="text-center text-sm font-medium text-zinc-500 dark:text-zinc-400 focus:dark:!bg-white/20 active:dark:!bg-white/20">
          Get your AI Saas Project to another level and start doing more with
          Horizon AI Boilerplate PRO!
        </p>
      </div>{' '}
      <a target="_blank" href="/pricing">
        <Button className="mt-auto flex h-full w-[200px] items-center justify-center rounded-lg px-4 py-2.5 text-base font-medium">
          Get started with PRO
        </Button>
      </a>
    </div>
  );
}
