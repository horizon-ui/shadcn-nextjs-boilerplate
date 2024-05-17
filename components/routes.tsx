// Auth Imports
import { IRoute } from '@/types/types';
import { FaMicrochip } from 'react-icons/fa6';
import {
  HiOutlineHome,
  HiOutlineCpuChip,
  HiOutlineUsers,
  HiOutlineCog8Tooth,
  HiOutlineCreditCard,
  HiOutlineDocumentText,
  HiOutlineCurrencyDollar,
} from 'react-icons/hi2';
import { MdAssistant, MdAutoAwesome, MdWorkspacePremium } from 'react-icons/md';

export const routes: IRoute[] = [
  {
    name: 'AI Chat',
    path: '/dashboard/ai-chat',
    icon: <FaMicrochip className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />,
    collapse: false,
  },
  {
    name: 'Main Dashboard',
    path: '/dashboard/main',
    icon: <HiOutlineHome className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />,
    collapse: false,
    disabled: true,
  },
  {
    name: 'AI Generator',
    path: '/dashboard/ai-generator',
    icon: (
      <MdWorkspacePremium className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />
    ),
    collapse: false,
    disabled: true,
  },
  {
    name: 'AI Assistant',
    path: '/dashboard/ai-assistant',
    icon: <MdAssistant className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />,
    collapse: false,
    disabled: true,
  },
  {
    name: 'Users List',
    path: '/dashboard/users-list',
    icon: (
      <HiOutlineUsers className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />
    ),
    collapse: false,
    disabled: true,
  },
  {
    name: 'Profile Settings',
    path: '/dashboard/settings',
    icon: (
      <HiOutlineCog8Tooth className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />
    ),
    collapse: false,
    disabled: true,
  },
  {
    name: 'Subscription',
    path: '/dashboard/subscription',
    icon: (
      <HiOutlineCreditCard className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />
    ),
    collapse: false,
    disabled: true,
  },
  {
    name: 'Landing Page',
    path: '/home',
    icon: (
      <HiOutlineDocumentText className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />
    ),
    collapse: false,
    disabled: true,
  },
  {
    name: 'Pricing Page',
    path: '/pricing',
    icon: (
      <HiOutlineCurrencyDollar className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />
    ),
    collapse: false,
    disabled: true,
  },
];
