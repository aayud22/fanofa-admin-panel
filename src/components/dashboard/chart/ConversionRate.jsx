import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { CardHeader, CardTitle } from '../../ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';

const ConversionChart = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    colors: ['#4DB9FF'], // Matches the blue shade
    plotOptions: {
      bar: {
        borderRadius: 6, // Rounded corners
        columnWidth: '60%', // Adjust bar width
      },
    },
    xaxis: {
      categories: [
        'Ads Visitors',
        'Banner Ads',
        'Purchase Complete',
        'Revenue',
        'Target',
      ],
      labels: {
        show: true,
        style: {
          fontSize: '14px',
          fontWeight: '600',
          colors: '#111827', // Neutral gray for category labels
        },
        offsetY: 10, // Move categories closer to the bars
      },
    },
    yaxis: {
      show: false, // Hide y-axis labels
    },
    grid: {
      show: false, // Remove grid lines
    },
    dataLabels: {
      enabled: true,
      formatter: (value) =>
        `${value > 1000 ? (value / 1000).toFixed(1) + 'K' : value}`, // Format values
      offsetY: 0, // Align values vertically to the top of the bar
      style: {
        fontSize: '14px',
        fontWeight: '600',
        colors: ['#111827'], // Dark text for values
      },
    },
    tooltip: {
      enabled: true,
    },
    stroke: {
      show: true,
      width: 1, // Thin border for bars
      colors: ['#E5E7EB'], // Light gray for the border
    },
  };

  const chartSeries = [
    {
      name: 'Data',
      data: [425424, 67439, 2579, 2579 * 1000, 1579 * 1000], // Values for bars
    },
  ];

  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-soft-xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
        <CardTitle className="text-lg font-bold text-darkBlueText">
          Conversion Rate
        </CardTitle>
        <Select defaultValue="this-year">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-year">This Year</SelectItem>
            <SelectItem value="last-year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <ReactApexChart
        type="bar"
        height={350}
        series={chartSeries}
        options={chartOptions}
      />
    </div>
  );
};

export default ConversionChart;
