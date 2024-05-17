'use client';

// if you use app dir, don't forget this line
import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function ExampleChart(props: any) {
  const { chartData, chartOptions } = props;
  return (
    <ApexChart
      type="bar"
      options={chartOptions}
      series={chartData}
      height="100%"
      width="100%"
    />
  );
}
