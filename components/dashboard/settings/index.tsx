/*eslint-disable*/
'use client';

// import ManageSubscriptionButton from './ManageSubscriptionButton';
import DashboardLayout from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Database } from '@/types/types_db';
import { updateName, updateEmail } from '@/utils/auth-helpers/server';
import { User } from '@supabase/supabase-js';
import { useState } from 'react';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import Notification from './components/notification';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HiOutlineCheck } from 'react-icons/hi';

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
  user: User | null | undefined;
  userDetails: { [x: string]: any } | null;
}

export default function Settings(props: Props) {
  // Input States
  const [nameError, setNameError] = useState<{
    status: boolean;
    message: string;
  }>();

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Check if the new email is the same as the old email
    if (e.currentTarget.newEmail.value === props.user.email) {
      e.preventDefault();
      setIsSubmitting(false);
      return;
    }
    handleRequest(e, updateEmail, router);
    setIsSubmitting(false);
  };

  const handleSubmitName = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Check if the new name is the same as the old name
    if (e.currentTarget.fullName.value === props.user.user_metadata.full_name) {
      e.preventDefault();
      setIsSubmitting(false);
      return;
    }
    handleRequest(e, updateName, router);
    setIsSubmitting(false);
  };

  const notifications = [
    { message: 'Your call has been confirmed.', time: '1 hour ago' },
    { message: 'You have a new message!', time: '1 hour ago' },
    { message: 'Your subscription is expiring soon!', time: '2 hours ago' }
  ];

  return (
    <DashboardLayout
      user={props.user}
      title="Account Settings"
      description="Profile settings."
    >
      <div className="relative mx-auto flex w-max max-w-full flex-col md:pt-[unset] lg:pt-[100px] lg:pb-[100px]">
        <div className="maw-w-full mx-auto w-full flex-col justify-center md:w-full md:flex-row xl:w-full">
          <Card
            className={
              'mb-5 h-min flex items-center aligh-center max-w-full py-8 px-4 dark:border-zinc-800'
            }
          >
            <Avatar className="min-h-[68px] min-w-[68px]">
              <AvatarImage src={props.user?.user_metadata.avatar_url} />
              <AvatarFallback className="text-2xl font-bold dark:text-zinc-950">
                {props.user.user_metadata.full_name
                  ? `${props.user.user_metadata.full_name[0]}`
                  : `${props.user?.user_metadata.email[0].toUpperCase()}`}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xl font-extrabold text-zinc-950 leading-[100%] dark:text-white pl-4 md:text-3xl">
                {props.user.user_metadata.full_name}
              </p>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-2 pl-4 md:text-base">
                CEO and Founder
              </p>
            </div>
          </Card>
          <Card
            className={
              'mb-5 h-min max-w-full pt-8 pb-6 px-6 dark:border-zinc-800'
            }
          >
            <p className="text-xl font-extrabold text-zinc-950 dark:text-white md:text-3xl">
              Account Details
            </p>
            <p className="mb-6 mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-4 md:text-base">
              Here you can change your account information
            </p>
            <label
              className="mb-3 flex cursor-pointer px-2.5 font-bold leading-none text-zinc-950 dark:text-white"
              htmlFor={'name'}
            >
              Your Name
              <p className="ml-1 mt-[1px] text-sm font-medium leading-none text-zinc-500 dark:text-zinc-400">
                (30 characters maximum)
              </p>
            </label>
            <div className="mb-8 flex flex-col md:flex-row">
              <form
                className="w-full"
                id="nameForm"
                onSubmit={(e) => handleSubmitName(e)}
              >
                <input
                  type="text"
                  name="fullName"
                  defaultValue={props.user?.user_metadata.full_name ?? ''}
                  placeholder="Please enter your full name"
                  className={`mb-2 mr-4 flex h-full w-full items-center justify-center rounded-lg border border-zinc-200 bg-white/0 px-4 py-4 text-zinc-950 outline-none dark:!border-white/10 dark:text-white md:mb-0`}
                />
              </form>
              <Button
                className="flex h-full max-h-full w-full items-center justify-center rounded-lg px-4 py-4 text-base font-medium md:ms-4 md:w-[300px]"
                form="nameForm"
                type="submit"
              >
                Update name
              </Button>
              <div className="mt-8 h-px w-full max-w-[90%] self-center bg-zinc-200 dark:bg-white/10 md:mt-0 md:hidden" />
            </div>
            <p
              className={`mb-5 px-2.5 text-red-500 md:px-9 ${
                nameError?.status ? 'block' : 'hidden'
              }`}
            >
              {nameError?.message}
            </p>
            <label
              className="mb-3 ml-2.5 flex cursor-pointer px-2.5 font-bold leading-none text-zinc-950 dark:text-white"
              htmlFor={'email'}
            >
              Your Email
              <p className="ml-1 mt-[1px] text-sm font-medium leading-none text-zinc-500 dark:text-zinc-400">
                (We will email you to verify the change)
              </p>
            </label>

            <div className="mb-8 flex flex-col md:flex-row">
              <form
                className="w-full"
                id="emailForm"
                onSubmit={(e) => handleSubmitEmail(e)}
              >
                <input
                  placeholder="Please enter your email"
                  defaultValue={props.user.email ?? ''}
                  type="text"
                  name="newEmail"
                  className={`mr-4 flex h-full max-w-full w-full items-center justify-center rounded-lg border border-zinc-200 bg-white/0 px-4 py-4 text-zinc-950 outline-none dark:!border-white/10 dark:text-white`}
                />
              </form>
              <Button
                className="flex h-full max-h-full w-full items-center justify-center rounded-lg px-4 py-4 text-base md:ms-4 font-medium md:w-[300px]"
                type="submit"
                form="emailForm"
              >
                Update email
              </Button>
            </div>
          </Card>
          <Card
            className={
              'mb-5 mr-0 h-min max-w-full pt-8 pb-6 px-6 dark:border-zinc-800 md:mb-0'
            }
          >
            <div>
              <p className="text-xl font-extrabold text-zinc-950 dark:text-white md:text-3xl">
                Notifications
              </p>
              <p className="mb-5 mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-4 md:text-base">
                You have 3 unread messages.
              </p>
            </div>
            <Card
              className={
                'mb-5 h-min flex items-center max-w-full py-4 px-4 dark:border-zinc-800'
              }
            >
              <HiOutlineBellAlert className="w-6 h-6 me-4" />
              <div>
                <p className="text-zinc-950 dark:text-white font-medium mb-1">
                  Push Notifications
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                  Send notifications to device.
                </p>
              </div>
              <Switch className="ms-auto" />
            </Card>
            {notifications.map((notification, key) => {
              return (
                <Notification
                  className={key < notifications.length - 1 ? 'mb-6' : ''}
                  time={notification.time}
                  message={notification.message}
                />
              );
            })}

            <Button className="flex h-full w-full max-w-full mt-6 items-center justify-center rounded-lg px-4 py-4 text-base font-medium">
              <HiOutlineCheck className="me-2 h-6 w-6" /> Mark all as read
            </Button>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
