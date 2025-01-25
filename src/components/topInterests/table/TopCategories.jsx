import React from 'react';
import {
  ChartTooltip,
  ChartContainer,
  ChartTooltipContent,
} from '../../ui/chart';
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from '../../ui/table';
import { Label, Pie, PieChart } from 'recharts';
import { Card, CardTitle, CardHeader, CardContent } from '../../ui/card';

const chartData = [
  { browser: 'Cat 1', visitors: 173, fill: 'var(--color-edge)' },
  { browser: 'Cat 2', visitors: 90, fill: 'var(--color-other)' },
  { browser: 'Cat 3', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'Cat 4', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'Cat 5', visitors: 187, fill: 'var(--color-firefox)' },
  { browser: 'Cat 6', visitors: 187, fill: 'var(--color-firefox)' },
];

const category = [
  {
    categoryName: 'Cat 1',
    percentage: '45%',
    users: '451189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
  {
    categoryName: 'Cat 2',
    percentage: '50%',
    users: '451189',
    countries: ['US', 'VE', 'SV', 'RU2'],
  },
  {
    categoryName: 'Cat 3',
    percentage: '70%',
    users: '451189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
  {
    categoryName: 'Cat  4',
    percentage: '90%',
    users: '451189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
  {
    categoryName: 'Cat  5',
    percentage: '90%',
    users: '451189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
  {
    categoryName: 'Cat  6',
    percentage: '90%',
    users: '451189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
];

const chartConfig = {
  visitors: {
    label: 'Cat 1',
  },
  chrome: {
    label: 'Cat 2',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Cat 3',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Cat 4',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'Cat 5',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Cat 6',
    color: 'hsl(var(--chart-5))',
  },
};

const TopCategories = () => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-6 shadow-soft-xl">
      <Card className="flex flex-col border-none shadow-none">
        <CardHeader className="items-center pb-0">
          <CardTitle className="text-base font-bold text-darkBlueText">
            Interest Analysts
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer config={chartConfig}>
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                innerRadius={85}
                nameKey="browser"
                dataKey="visitors"
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan className="fill-darkBlueText text-xl font-bold">
                            Top Category
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Category
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                %
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                No. of Users
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Country
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {category.map((plan) => (
              <TableRow key={plan.id}>
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 bg-blue-700" />
                    <span className="text-sm font-semibold text-deepBlue">
                      {plan.categoryName}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-sm font-medium text-deepBlue">
                  {plan.percentage}
                </TableCell>
                <TableCell className="py-3 text-sm font-medium text-deepBlue">
                  {plan.users}
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex items-center gap-1">
                    {plan.countries.map((country, i) => (
                      <span
                        key={i}
                        className={`flag-icon flag-icon-${country.toLowerCase()} rounded-full`}
                      />
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TopCategories;
