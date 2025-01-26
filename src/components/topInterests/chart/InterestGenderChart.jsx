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
import { HelpCircle } from 'lucide-react';

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

const InterestGenderChart = () => {
  return (
    <div className="rounded-xl bg-white shadow-soft-xl">
      <Card className="flex flex-col border-none p-0 shadow-none">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-bold text-darkBlueText">
            Gender
          </CardTitle>
          <HelpCircle className="h-6 w-6 fill-mutedBlue text-white" />
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
                innerRadius={70}
                strokeWidth={5}
              >
                <Label
                  position="center"
                  content={({ viewBox }) => {
                    const { cx, cy } = viewBox;
                    return (
                      <text
                        x={cx}
                        y={cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        {/* Male Percentage */}
                        <tspan
                          x={cx - 30} // Shift to the left
                          className="fill-darkBlueText text-base font-extrabold"
                        >
                          ♂ 60%
                        </tspan>
                        {/* Female Percentage */}
                        <tspan
                          x={cx + 30} // Shift to the right
                          className="fill-mediumBlue text-base font-extrabold"
                        >
                          ♀ 40%
                        </tspan>
                      </text>
                    );
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
              <div className="h-2 w-2 rounded-full bg-mediumBlue" />
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

export default InterestGenderChart;
