/*eslint-disable*/
'use client';

interface Props {
  status?: 'danger' | 'waiting' | 'confirmed';
  message: string;
  time: string;
  className?: string;
}

export default function Notification(props: Props) {
  return (
    <div
      className={`relative mx-auto flex w-full max-w-full md:pt-[unset] ${props.className}`}
    >
      <div
        className={`w-2 h-2 mt-1 me-4 rounded-full ${
          props.status === 'danger'
            ? 'bg-red-500'
            : props.status === 'waiting'
            ? 'bg-yellow-500'
            : props.status === 'confirmed'
            ? 'bg-green-500'
            : 'bg-blue-500'
        }`}
      />
      <div>
        <p className="text-zinc-950 dark:text-white font-medium mb-1">
          {props.message}
        </p>
        <p className="text-zinc-500 dark:text-zinc-400 font-medium">
          {props.time}
        </p>
      </div>
    </div>
  );
}
