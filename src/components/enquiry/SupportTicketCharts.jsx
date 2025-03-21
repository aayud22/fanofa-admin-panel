import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';

const adminData = [
  { name: 'Ronald Richards', value: 564534, completed: 75 },
  { name: 'Eleanor Pena', value: 35334, completed: 85 },
  { name: 'Savannah Nguyen', value: 345354, completed: 80 },
  { name: 'Jane Cooper', value: 34534, completed: 60 },
  { name: 'Jerome Bell', value: 4353, completed: 85 },
];

const categoryData = [
  { name: 'Contact Us', value: 564534, color: '#2D9CDB' },
  { name: 'Dispute', value: 353334, color: '#56CCF2' },
  { name: 'Support', value: 345354, color: '#2F80ED' },
  { name: 'Complaints', value: 324534, color: '#8BCBF9' },
  { name: 'Advertising', value: 653253, color: '#C5E5FC' },
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

const SupportTicketCharts = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="bg-white p-2 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold text-deepIndigo">
            Tickets share per category
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="relative h-64 w-64">
              <ResponsiveContainer width="100%" height="100%">
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
                      padAngle={8}
                      nameKey="name"
                      strokeWidth={2}
                      dataKey="value"
                      innerRadius={70}
                      outerRadius={90}
                      cornerRadius={10}
                      data={categoryData}
                    >
                      {categoryData?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ChartContainer>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 flex flex-col space-y-3 md:mt-0">
              {categoryData?.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className="mr-3 h-4 w-4"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="font-medium text-deepIndigo">
                      {item.name}
                    </span>
                  </div>
                  <span className="ml-8 font-medium text-deepIndigo">
                    {item.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white p-2 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold text-deepIndigo">
            Tickets share per Super admin/ Admin
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-6">
            {adminData?.map((item, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-deepIndigo">
                    {item.name}
                  </span>
                  <span className="font-medium text-deepIndigo">
                    {item.value.toLocaleString()}
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-aquaBlue"
                    style={{ width: `${item.completed}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportTicketCharts;
