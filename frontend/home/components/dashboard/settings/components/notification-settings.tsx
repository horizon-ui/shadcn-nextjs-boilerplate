/*eslint-disable*/
'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Notification from '@/components/notification';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { Switch } from '@/components/ui/switch';
import { HiOutlineCheck } from 'react-icons/hi';

interface Props {
  notifications: {
    message: string;
    time: string;
    status?: 'danger' | 'waiting' | 'confirmed';
    className?: string;
  }[];
}

export default function Settings(props: Props) {
  return (
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
      {props.notifications.map((notification, key) => {
        return (
          <Notification
            className={key < props.notifications.length - 1 ? 'mb-6' : ''}
            time={notification.time}
            message={notification.message}
          />
        );
      })}

      <Button className="flex h-full w-full max-w-full mt-6 items-center justify-center rounded-lg px-4 py-4 text-base font-medium">
        <HiOutlineCheck className="me-2 h-6 w-6" /> Mark all as read
      </Button>
    </Card>
  );
}
