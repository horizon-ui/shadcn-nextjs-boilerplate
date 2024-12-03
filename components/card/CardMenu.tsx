import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShop } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { TiLightbulb } from 'react-icons/ti';

function CardMenu(props: { transparent?: boolean; vertical?: boolean }) {
  const { transparent, vertical } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            onClick={() => setOpen(!open)}
            className={`flex items-center text-xl hover:cursor-pointer ${
              transparent
                ? 'bg-transparent text-white hover:bg-transparent active:bg-transparent'
                : vertical
                ? 'bg-transparent text-zinc-950 hover:bg-transparent active:bg-transparent dark:text-white dark:hover:bg-transparent dark:active:bg-transparent'
                : 'bg-lightPrimary text-brand-500 p-2 hover:bg-gray-100 dark:bg-zinc-950 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10'
            } justify-center rounded-lg font-bold transition duration-200`}
          >
            {vertical ? (
              <p className="text-2xl hover:cursor-pointer">
                <BsThreeDots />
              </p>
            ) : (
              <BsThreeDots className="h-6 w-6" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-[80] w-40 border-zinc-200 dark:border-zinc-800">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <p className="flex cursor-pointer items-center gap-2 text-zinc-800 hover:font-medium hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white">
                <span>
                  <AiOutlineUser />
                </span>
                Panel 1
              </p>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <p className="mt-2 flex cursor-pointer items-center gap-2 pt-1 text-zinc-950 hover:font-medium hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white">
                <span>
                  <AiOutlineShop />
                </span>
                Panel 2
              </p>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <p className="mt-2 flex cursor-pointer items-center gap-2 pt-1 text-zinc-950 hover:font-medium hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white">
                <span>
                  <TiLightbulb />
                </span>
                Panel 3
              </p>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <p className="mt-2 flex cursor-pointer items-center gap-2 pt-1 text-zinc-950 hover:font-medium hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white">
                <span>
                  <FiSettings />
                </span>
                Panel 4
              </p>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default CardMenu;
