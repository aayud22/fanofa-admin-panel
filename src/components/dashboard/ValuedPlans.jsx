import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label, Pie, PieChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const plans = [
  {
    name: 'Personal Plus',
    users: '43254',
    earning: '$1189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
  {
    name: 'Business Plus',
    users: '43254',
    earning: '$1189',
    countries: ['US', 'VE', 'SV', 'RU2'],
  },
  {
    name: 'Individual',
    users: '43254',
    earning: '$1189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
  {
    name: 'Personal',
    users: '43254',
    earning: '$1189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
};

const chartData = [
  { browser: 'Personal Plus', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'Business Plus', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'Individual', visitors: 287, fill: 'var(--color-firefox)' },
  { browser: 'Personal', visitors: 173, fill: 'var(--color-edge)' },
];

const ValuedPlans = () => {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <div className="rounded-xl bg-white p-6 shadow-soft-xl">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-darkBlueText">Valued Plans</h2>
          <span className="text-xs font-medium text-mutedBlue">
            (This Week)
          </span>
        </div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
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
      </div>
      <div className="grid md:grid-cols-[250px_1fr]">
        <Card className="flex flex-col border-none shadow-none">
          <CardHeader className="items-start p-0">
            <CardTitle className="text-sm font-semibold text-darkBlueText">
              Top Purchasing Plans
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ChartContainer
              config={chartConfig}
              className="aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  cornerRadius={29}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={70}
                  strokeWidth={5}
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
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-mutedBlue text-xs font-medium"
                            >
                              Sales
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-darkBlueText text-3xl font-bold"
                            >
                              ${totalVisitors.toLocaleString()}
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
                  Plans
                </TableHead>
                <TableHead className="text-sm font-medium text-mutedBlue">
                  No. of Users
                </TableHead>
                <TableHead className="text-sm font-medium text-mutedBlue">
                  Earning
                </TableHead>
                <TableHead className="text-sm font-medium text-mutedBlue">
                  Countries
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.map((plan) => (
                <TableRow key={plan.id}>
                  <TableCell className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 bg-blue-700" />
                      <span className="text-sm font-semibold text-deepBlue">
                        {plan.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-3 text-sm font-medium text-deepBlue">
                    {plan.users}
                  </TableCell>
                  <TableCell className="py-3 text-sm font-medium text-deepBlue">
                    {plan.earning}
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
          <p className="my-4 w-full pl-2 text-[10px] font-semibold text-darkBlueText">
            Lorem Ipsum is simply dummy text of the printing and industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValuedPlans;
