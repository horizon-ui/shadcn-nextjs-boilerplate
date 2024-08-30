'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 }
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)'
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-2)'
  }
} satisfies ChartConfig;

export default function BarChartComponent() {
  return (
    <Card className="w-full xl:w-2/4 items-center justify-between rounded-lg border-zinc-200 bg-clip-border dark:border-zinc-800">
      <CardHeader>
        <CardTitle className="text-2xl font-bold leading-6 text-zinc-950 dark:text-white">
          Credit usage
        </CardTitle>
        <CardDescription className="text-xs font-medium leading-5 text-zinc-500 dark:text-zinc-400">
          January - June 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="aspect-auto h-[300px] xl:h-[200px] 2xl:h-[250px] w-full"
          config={chartConfig}
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 text-base text-zinc-950 dark:text-white font-medium leading-none">
          +20.4% from last month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Showing credits usage for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
