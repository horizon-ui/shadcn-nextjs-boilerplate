// Sidebar

export const lineChartDataSidebar = [
 {
  name: 'Balance',
  data: [10, 39, 80, 50, 10],
 },
 {
  name: 'Profit',
  data: [20, 60, 30, 40, 20],
 },
];

export const lineChartOptionsSidebar = {
 chart: {
  toolbar: {
   show: false,
  },
 },
 markers: {
  size: 0,
  colors: '#868CFF',
  strokeColors: 'white',
  strokeWidth: 2,
  strokeOpacity: 0.9,
  strokeDashArray: 0,
  fillOpacity: 1,
  shape: 'circle',
  radius: 2,
  offsetX: 0,
  offsetY: 0,
  showNullDataPoints: true,
 },
 tooltip: {
  theme: 'dark',
 },
 dataLabels: {
  enabled: false,
 },
 stroke: {
  curve: 'smooth',
  type: 'gradient',
 },
 xaxis: {
  categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
  labels: {
   style: {
    colors: 'white',
    fontSize: '8px',
    fontWeight: '500',
   },
  },
  axisBorder: {
   show: false,
  },
  axisTicks: {
   show: false,
  },
 },
 yaxis: {
  show: false,
 },
 legend: {
  show: false,
 },
 grid: {
  show: false,
  column: {
   colors: ['transparent'], // takes an array which will be repeated on columns
   opacity: 0.5,
  },
 },
 fill: {
  type: 'gradient',
  gradient: {
   type: 'vertical',
   shadeIntensity: 0.1,
   opacityFrom: 0.3,
   opacityTo: 0.9,
   colorStops: [
    [
     {
      offset: 0,
      color: 'white',
      opacity: 1,
     },
     {
      offset: 100,
      color: 'white',
      opacity: 0,
     },
    ],
    [
     {
      offset: 0,
      color: '#6AD2FF',
      opacity: 1,
     },
     {
      offset: 100,
      color: '#6AD2FF',
      opacity: 0.2,
     },
    ],
   ],
  },
 },
};

// Sidebar

export const barChartDataSidebar = [
 {
  name: 'Credits Used',
  data: [297, 410, 540, 390, 617, 520, 490],
 },
];

export const barChartOptionsSidebar = {
 chart: {
  toolbar: {
   show: false,
  },
 },
 tooltip: {
  style: {
   fontSize: '12px',
  },
  onDatasetHover: {
   style: {
    fontSize: '12px',
   },
  },
  theme: 'dark',
 },
 xaxis: {
  categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  show: false,
  labels: {
   show: true,
   style: {
    colors: '#FFFFFF',
    fontSize: '12px',
    fontWeight: '500',
   },
  },
  axisBorder: {
   show: false,
  },
  axisTicks: {
   show: false,
  },
 },
 yaxis: {
  show: false,
  color: 'black',
  labels: {
   show: true,
   style: {
    colors: '#CBD5E0',
    fontSize: '12px',
   },
  },
 },
 grid: {
  show: false,
  strokeDashArray: 5,
  yaxis: {
   lines: {
    show: true,
   },
  },
  xaxis: {
   lines: {
    show: false,
   },
  },
 },
 fill: {
  type: 'solid',
  colors: ['#FFFFFF'],
  opacity: 1,
 },
 dataLabels: {
  enabled: false,
 },
 plotOptions: {
  bar: {
   borderRadius: 8,
   columnWidth: '40px',
  },
 },
};

// Project Default Dashboards Default

export const lineChartDataUsage = [
 {
  name: 'Credits Used',
  data: [
   7420, 6504, 8342, 6024, 9592, 10294, 8842, 11695, 10423, 12045, 12494,
   16642,
  ],
 },
];

export const lineChartOptionsUsage = {
 chart: {
  toolbar: {
   show: false,
  },
  dropShadow: {
   enabled: true,
   top: 13,
   left: 0,
   blur: 10,
   opacity: 0.1,
   color: '#09090B',
  },
 },
 colors: ['#09090B'],
 markers: {
  size: 0,
  colors: 'white',
  strokeColors: '#09090B',
  strokeWidth: 2,
  strokeOpacity: 0.9,
  strokeDashArray: 0,
  fillOpacity: 1,
  shape: 'circle',
  radius: 2,
  offsetX: 0,
  offsetY: 0,
  showNullDataPoints: true,
 },
 tooltip: {
  theme: 'dark',
 },
 dataLabels: {
  enabled: false,
 },
 stroke: {
  curve: 'smooth',
  type: 'gradient',
 },
 xaxis: {
  categories: [
   'SEP',
   'OCT',
   'NOV',
   'DEC',
   'JAN',
   'FEB',
   'MAR',
   'APR',
   'MAY',
   'JUN',
   'JUL',
   'AUG',
  ],
  labels: {
   style: {
    colors: '#71717A',
    fontSize: '14px',
    fontWeight: '500',
   },
  },
  axisBorder: {
   show: false,
  },
  axisTicks: {
   show: false,
  },
 },
 yaxis: {
  show: false,
 },
 legend: {
  show: false,
 },
 dropShadow: {
  enabled: true,
  top: 0,
  left: 0,
  blur: 3,
  opacity: 0.5,
 },
 grid: {
  show: false,
  column: {
   colors: ['transparent'], // takes an array which will be repeated on columns
   opacity: 0.5,
  },
 },
};
// Overall Revenue Dashboards Default

export const lineChartDataMain = [
 {
  name: 'Revenue',
  data: [50, 40, 70, 30, 80, 60, 90, 140, 70, 90, 70, 140],
 }, 
];

export const lineChartOptionsMain = {
 chart: {
  toolbar: {
   show: false,
  },
  dropShadow: {
   enabled: true,
   top: 13,
   left: 0,
   blur: 10,
   opacity: 0.1, 
  },
 },
 colors: ['var(--chart)' ],
 markers: {
  size: 0,
  colors: 'white',
  strokeColors: '#71717A',
  strokeWidth: 3,
  strokeOpacity: 0.9,
  strokeDashArray: 0,
  fillOpacity: 1,
  shape: 'circle',
  radius: 2,
  offsetX: 0,
  offsetY: 0,
  showNullDataPoints: true,
 },
 tooltip: {
  theme: 'dark',
 },
 dataLabels: {
  enabled: false,
 },
 stroke: {
  curve: 'smooth',
  type: 'line',
 },
 xaxis: {
  categories: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
  labels: {
   style: {
    colors: '#71717A',
    fontSize: '12px',
    fontWeight: '600',
   },
  },
  axisBorder: {
   show: false,
  },
  axisTicks: {
   show: false,
  },
 },
 yaxis: {
  show: false,
 },
 legend: {
  show: false,
 },
 grid: {
  show: false,
  column: {
   color: ['#71717A', '#39B8FF'],
   opacity: 0.5,
  },
 },
 color: ['#71717A', '#39B8FF'],
};