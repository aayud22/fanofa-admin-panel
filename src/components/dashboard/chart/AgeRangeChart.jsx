import React from 'react';
import {
  ChartTooltip,
  ChartContainer,
  ChartTooltipContent,
} from '../../ui/chart';
import { HelpCircle } from 'lucide-react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

const data = [
  { age: 'Below 20', value: 30 },
  { age: '21-40', value: 20 },
  { age: '41-60', value: 45 },
  { age: '60+', value: 35 },
];

const AgeRangeChart = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-soft-xl">
      <Card className="w-full max-w-lg border-none shadow-none">
        <CardHeader className="flex flex-row items-center justify-between p-0 pb-2">
          <CardTitle className="text-lg font-bold text-darkBlueText">
            Age range
          </CardTitle>
          <HelpCircle className="h-6 w-6 fill-mutedBlue text-white" />
        </CardHeader>
        <CardContent className="p-0">
          <ChartContainer
            config={{
              value: {
                label: 'Count',
                color: 'hsl(217, 91%, 60%)',
              },
            }}
            className="aspect-[1.618/1]"
          >
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                bottom: 30,
                left: 20,
              }}
            >
              <XAxis
                dataKey="age"
                tick={{ fill: '#2a3990', fontSize: 14 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
              <Bar
                dataKey="value"
                fill="rgb(59, 130, 246)"
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgeRangeChart;
