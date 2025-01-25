import React from 'react';
import { Label, Pie, PieChart } from 'recharts';
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from '../../ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../../ui/chart';

const chartData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
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

const InterestGenderAgeChart = () => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white shadow-soft-xl">
      <Card className="flex flex-col border-none p-0 shadow-none">
        <CardHeader className="items-start pb-0">
          <CardTitle className="font-bol text-base text-darkBlueText">
            Gender
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={80}
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
                            y={viewBox.cy}
                            className="fill-darkBlueText text-3xl font-extrabold"
                          >
                            ♂
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-darkBlueText text-base font-semibold"
                          >
                            60%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-darkBlueText text-3xl font-extrabold"
                          >
                            ♂
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-darkBlueText text-base font-semibold"
                          >
                            60%
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
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center space-y-1 text-center">
              <div className="h-2 w-2 rounded-full bg-darkBlueText" />
              <div className="flex items-center gap-2 text-base font-medium leading-none text-darkBlueText">
                Male
              </div>
              <div className="text-xs font-semibold leading-none text-mutedBlue">
                5433563
              </div>
            </div>
            <div className="flex flex-col items-center space-y-1 text-center">
              <div className="bg-mediumBlue h-2 w-2 rounded-full" />
              <div className="flex items-center gap-2 text-base font-medium leading-none text-darkBlueText">
                Female
              </div>
              <div className="text-xs font-semibold leading-none text-mutedBlue">
                3543533
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default InterestGenderAgeChart;
