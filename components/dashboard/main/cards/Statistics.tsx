import { Card } from '@/components/ui/card';

const Statistics = (props: {
  icon?: JSX.Element;
  title: string;
  info?: string;
  value: number | string;
  endContent?: JSX.Element;
}) => {
  const { icon, title, value, endContent, info } = props;
  return (
    <Card className="flex w-full items-center justify-between rounded-lg border-zinc-200 bg-clip-border p-6 dark:border-zinc-800">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <h5 className="text-sm font-medium leading-5 text-zinc-950 dark:text-white">
            {title}
          </h5>
          <p className="mt-1 text-2xl font-bold leading-6 text-zinc-950 dark:text-white">
            {value}
          </p>
          {info ? (
            <p className="mt-1 text-xs font-medium leading-5 text-zinc-500 dark:text-zinc-400">
              {info}
            </p>
          ) : (
            ''
          )}
        </div>
      </div>

      {endContent}
    </Card>
  );
};

export default Statistics;
