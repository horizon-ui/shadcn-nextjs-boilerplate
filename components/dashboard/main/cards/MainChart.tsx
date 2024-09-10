'use client';

import LineChart from '@/components/charts/LineChart';
import { Card } from '@/components/ui/card';
import { lineChartDataMain, lineChartOptionsMain } from '@/variables/charts';
import { HiChartBar } from 'react-icons/hi2';

function OverallRevenue() {
  const newOptions = {
    ...lineChartOptionsMain
  };

  return (
    <Card className={'border-zinc-200 p-6 dark:border-zinc-800 w-full'}>
      <div className="flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 text-4xl dark:border-zinc-800 dark:text-white">
          <HiChartBar className="h-5 w-5" />
        </div>
        <div>
          <h5 className="text-sm font-medium leading-5 text-zinc-950 dark:text-white">
            Credits usage in the last year
          </h5>
          <p className="mt-1 text-2xl font-bold leading-6 text-zinc-950 dark:text-white">
            149,758
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="flex h-[350px] w-full flex-row sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="h-full w-full">
          <LineChart chartData={lineChartDataMain} chartOptions={newOptions} />
        </div>
      </div>
    </Card>
  );
}

export default OverallRevenue;
