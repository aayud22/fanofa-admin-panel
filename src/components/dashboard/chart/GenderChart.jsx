import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

const GenderChart = ({ malePercentage, femalePercentage }) => {
  const data = [
    { name: 'Male', value: 55 },
    { name: 'Female', value: 45 },
  ];

  const COLORS = ['#3EB1E0', '#A3AED0'];

  return (
    <div className="rounded-xl bg-white p-6 shadow-soft-xl">
      <Card className="border-none shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-4">
          <CardTitle className="text-lg font-bold text-darkBlueText">
            Gender
          </CardTitle>
          <HelpCircle className="h-6 w-6 fill-mutedBlue text-white" />
        </CardHeader>
        <CardContent className="flex flex-col items-center p-0">
          {/* Increase chart size and center it */}
          <div
            className="flex w-full items-center justify-center"
            style={{ marginTop: '-10px' }}
          >
            <PieChart width={280} height={230}>
              <Pie
                cx="50%"
                cy="60%" // Adjusted to center the larger chart
                data={data}
                endAngle={0}
                fill="#8884d8"
                dataKey="value"
                startAngle={180}
                innerRadius={90}
                outerRadius={120} // Increased radius for a larger chart
                paddingAngle={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          {/* Add percentage information below the chart */}
          <div className="-mt-14 flex w-full flex-row items-center justify-around">
            <div className="flex items-center space-x-2">
              <div
                className="h-5 w-5 rounded-full"
                style={{ backgroundColor: COLORS[0] }}
              ></div>
              <span className="font-medium text-darkBlueText">55% Male</span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="h-5 w-5 rounded-full"
                style={{ backgroundColor: COLORS[1] }}
              ></div>
              <span className="font-medium text-mutedBlue">45% Female</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenderChart;
