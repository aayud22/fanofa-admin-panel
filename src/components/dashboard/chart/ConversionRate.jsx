import React from 'react';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '../../ui/select';
import {
  ChartTooltip,
  ChartContainer,
  ChartTooltipContent,
} from '../../ui/chart';
import { CardHeader, CardTitle } from '../../ui/card';
import { Bar, BarChart, CartesianGrid, LabelList } from 'recharts';

const ConversionChart = () => {
  const chartData = [
    { month: 'January', desktop: 1000, type: 'Ads Visitors' },
    { month: 'February', desktop: 1200, type: 'Banner Ads' },
    { month: 'March', desktop: 1300, type: 'Purchase Complete' },
    { month: 'April', desktop: 1600, type: 'Revenue' },
    { month: 'May', desktop: 1700, type: 'Target' },
  ];

  const chartConfig = {
    desktop: {
      label: 'Value',
      color: 'hsl(var(--chart-1))',
    },
  };

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
      <ChartContainer config={chartConfig}>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
          }}
        >
          <CartesianGrid vertical={false} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey="desktop"
            radius={8}
            shape={(props) => {
              const { x, y, width, height, index } = props;
              const colors = [
                '#4DB9FF',
                '#5BC0EB',
                '#65D3EA',
                '#7AE2F7',
                '#A3EAF8',
              ]; // Define bar colors
              return (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={colors[index % colors.length]}
                  rx={8} // Rounded corners
                />
              );
            }}
          >
            {/* Add a LabelList for the type text */}
            <LabelList
              dataKey="type" // Use the "type" field for labels
              position="top" // Display labels on top of the bar
              offset={8} // Adjust offset for better positioning
              style={{ fill: '#111827', fontWeight: 600, fontSize: 12 }} // Styling for labels
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default ConversionChart;
