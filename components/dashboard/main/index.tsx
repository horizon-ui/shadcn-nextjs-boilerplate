/*eslint-disable*/
'use client';

import MainDashboardTable from '@/components/dashboard/main/cards/MainDashboardTable';
import Statistics from '@/components/dashboard/main/cards/Statistics';
import AreaChartComponent from '@/components/charts/AreaChart';
import BarChartComponent from '@/components/charts/BarChart';
import DashboardLayout from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Database } from '@/types/types_db';
import tableDataUserReports from '@/variables/tableDataUserReports';
import { User } from '@supabase/supabase-js';
import {
  HiChartBar,
  HiUsers,
  HiOutlineWallet,
  HiOutlineCurrencyDollar
} from 'react-icons/hi2';

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
  userDetails: { [x: string]: any } | null | any;
}

export default function Settings(props: Props) {
  return (
    <DashboardLayout
      user={props.user}
      title="Subscription Page"
      description="Manage your subscriptions"
    >
      <div className="h-full w-full">
        <div className="mb-5 grid w-full grid-cols-1 gap-5 rounded-lg md:grid-cols-2 xl:grid-cols-4">
          {/* statistics */}
          <Statistics
            icon={
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 text-4xl dark:border-zinc-800 dark:text-white">
                <HiChartBar className="h-5 w-5" />
              </div>
            }
            title="Total Credits Used"
            value="46,823"
            info="+20.4% from last month"
          />
          <Statistics
            icon={
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 text-4xl dark:border-zinc-800 dark:text-white">
                <HiUsers className="h-5 w-5" />
              </div>
            }
            title="Total Users"
            value="67,284"
            info="+12.3% from last month"
          />
          <Statistics
            icon={
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 text-4xl dark:border-zinc-800 dark:text-white">
                <HiOutlineWallet className="h-5 w-5 stroke-2" />
              </div>
            }
            title="Credits Available"
            value="100,000"
            info=""
          />
          <Statistics
            icon={
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 text-4xl dark:border-zinc-800 dark:text-white">
                <HiOutlineCurrencyDollar className="h-5 w-5 stroke-2" />
              </div>
            }
            title="Current Plan"
            value="Expert+"
            endContent={
              <a href="/dashboard/subscription">
                <Button variant="outline">Manage</Button>
              </a>
            }
          />
        </div>
        <div className="mb-5 flex gap-5 flex-col xl:flex-row">
          <AreaChartComponent />
          <BarChartComponent />
        </div>
        {/* Conversion and talbes*/}
        <div className="h-full w-full rounded-lg ">
          <MainDashboardTable tableData={tableDataUserReports} />
        </div>
      </div>
    </DashboardLayout>
  );
}
