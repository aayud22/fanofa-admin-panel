// import React from 'react';
// import {
//   ChartTooltip,
//   ChartContainer,
//   ChartTooltipContent,
// } from '../../ui/chart';
// import {
//   Table,
//   TableRow,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
// } from '../../ui/table';
// import { Label, Pie, PieChart } from 'recharts';
// import { Card, CardTitle, CardHeader, CardContent } from '../../ui/card';

// const chartData = [
//   { browser: 'Cat 1', visitors: 173, fill: '#3EB1E0' },
//   { browser: 'Cat 2', visitors: 90, fill: '#499FDB' },
//   { browser: 'Cat 3', visitors: 275, fill: '#72B1E2' },
//   { browser: 'Cat 4', visitors: 200, fill: '#8FC5E9' },
//   { browser: 'Cat 5', visitors: 187, fill: '#BEE0F3' },
//   { browser: 'Cat 6', visitors: 187, fill: '#D6ECF8' },
// ];

// const category = [
//   {
//     categoryName: 'Cat 1',
//     percentage: '45%',
//     users: '451189',
//     countries: ['US', 'VE', 'SV', 'RU'],
//   },
//   {
//     categoryName: 'Cat 2',
//     percentage: '50%',
//     users: '451189',
//     countries: ['US', 'VE', 'SV', 'RU2'],
//   },
//   {
//     categoryName: 'Cat 3',
//     percentage: '70%',
//     users: '451189',
//     countries: ['US', 'VE', 'SV', 'RU'],
//   },
//   {
//     categoryName: 'Cat  4',
//     percentage: '90%',
//     users: '451189',
//     countries: ['US', 'VE', 'SV', 'RU'],
//   },
//   {
//     categoryName: 'Cat  5',
//     percentage: '90%',
//     users: '451189',
//     countries: ['US', 'VE', 'SV', 'RU'],
//   },
//   {
//     categoryName: 'Cat  6',
//     percentage: '90%',
//     users: '451189',
//     countries: ['US', 'VE', 'SV', 'RU'],
//   },
// ];

// const chartConfig = {
//   visitors: {
//     label: 'Cat 1',
//     color: 'hsl(var(--chart-1))',
//   },
//   chrome: {
//     label: 'Cat 2',
//     color: 'hsl(var(--chart-1))',
//   },
//   safari: {
//     label: 'Cat 3',
//     color: 'hsl(var(--chart-2))',
//   },
//   firefox: {
//     label: 'Cat 4',
//     color: 'hsl(var(--chart-3))',
//   },
//   edge: {
//     label: 'Cat 5',
//     color: 'hsl(var(--chart-4))',
//   },
//   other: {
//     label: 'Cat 6',
//     color: 'hsl(var(--chart-5))',
//   },
// };

// const TopCategories = () => {
//   return (
//     <div className="rounded-xl bg-white shadow-soft-xl">
//       <Card className="my-4 flex flex-col border-none shadow-none">
//         <CardHeader className="items-start pb-0">
//           <CardTitle className="text-start text-base font-bold text-darkBlueText">
//             Interest Analysts
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="flex items-center justify-between pb-0">
//           <ChartContainer
//             config={chartConfig}
//             className="aspect-square max-h-[250px]"
//           >
//             <PieChart>
//               <ChartTooltip
//                 cursor={false}
//                 content={<ChartTooltipContent hideLabel />}
//               />
//               <Pie
//                 data={chartData}
//                 dataKey="visitors"
//                 nameKey="browser"
//                 innerRadius={80}
//                 strokeWidth={5}
//               >
//                 <Label
//                   content={({ viewBox }) => {
//                     if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
//                       return (
//                         <text
//                           x={viewBox.cx}
//                           y={viewBox.cy}
//                           textAnchor="middle"
//                           dominantBaseline="middle"
//                         >
//                           <tspan
//                             x={viewBox.cx}
//                             y={viewBox.cy}
//                             className="fill-foreground text-3xl font-bold"
//                           >
//                             123%
//                           </tspan>
//                           <tspan
//                             x={viewBox.cx}
//                             y={(viewBox.cy || 0) + 24}
//                             className="fill-muted-foreground"
//                           >
//                             Visitors
//                           </tspan>
//                         </text>
//                       );
//                     }
//                   }}
//                 />
//               </Pie>
//             </PieChart>
//           </ChartContainer>

//           <div className="w-[500px] overflow-x-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="text-sm font-medium text-mutedBlue">
//                     Category
//                   </TableHead>
//                   <TableHead className="text-sm font-medium text-mutedBlue">
//                     %
//                   </TableHead>
//                   <TableHead className="text-sm font-medium text-mutedBlue">
//                     No. of Users
//                   </TableHead>
//                   <TableHead className="text-sm font-medium text-mutedBlue">
//                     Country
//                   </TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {category.map((plan) => (
//                   <TableRow key={plan.id}>
//                     <TableCell className="py-3">
//                       <div className="flex items-center gap-3">
//                         <div className="h-5 w-5 bg-blue-700" />
//                         <span className="text-sm font-semibold text-deepBlue">
//                           {plan.categoryName}
//                         </span>
//                       </div>
//                     </TableCell>
//                     <TableCell className="py-3 text-sm font-medium text-deepBlue">
//                       {plan.percentage}
//                     </TableCell>
//                     <TableCell className="py-3 text-sm font-medium text-deepBlue">
//                       {plan.users}
//                     </TableCell>
//                     <TableCell className="py-3">
//                       <div className="flex items-center gap-1">
//                         {plan.countries.map((country, i) => (
//                           <span
//                             key={i}
//                             className={`flag-icon flag-icon-${country.toLowerCase()} rounded-full`}
//                           />
//                         ))}
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default TopCategories;

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
  { browser: 'Cat 1', visitors: 173, fill: '#3EB1E0' },
  { browser: 'Cat 2', visitors: 90, fill: '#499FDB' },
  { browser: 'Cat 3', visitors: 275, fill: '#72B1E2' },
  { browser: 'Cat 4', visitors: 200, fill: '#8FC5E9' },
  { browser: 'Cat 5', visitors: 187, fill: '#BEE0F3' },
  { browser: 'Cat 6', visitors: 187, fill: '#D6ECF8' },
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
    countries: ['US', 'VE', 'SV', 'RU'],
  },
  {
    categoryName: 'Cat 3',
    percentage: '70%',
    users: '451189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
  {
    categoryName: 'Cat 4',
    percentage: '90%',
    users: '451189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
  {
    categoryName: 'Cat 5',
    percentage: '90%',
    users: '451189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
  {
    categoryName: 'Cat 6',
    percentage: '90%',
    users: '451189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
];

const chartConfig = {
  visitors: {
    label: 'Cat 1',
    color: 'hsl(var(--chart-1))',
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
    <div className="rounded-xl bg-white shadow-soft-xl">
      <Card className="my-4 flex flex-col border-none shadow-none">
        <CardHeader className="items-start pb-0">
          <CardTitle className="text-start text-base font-bold text-darkBlueText">
            Interest Analysts
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-6 pb-0">
          {/* Chart Section */}
          <div className="w-[400px] flex-shrink-0">
            <ChartContainer
              config={chartConfig}
              className="aspect-square max-w-full"
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
                  innerRadius={105}
                  outerRadius={140}
                  strokeWidth={3}
                  fill="#8884d8"
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox?.cx && viewBox?.cy) {
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
                              className="fill-foreground text-xl font-bold"
                            >
                              Top
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 20}
                              className="fill-muted-foreground text-sm"
                            >
                              Category
                            </tspan>
                          </text>
                        );
                      }
                      return null;
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </div>

          {/* Table Section */}
          <div className="flex flex-grow items-center justify-center overflow-x-auto">
            <Table className="text-sm">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs font-medium text-mutedBlue">
                    Category
                  </TableHead>
                  <TableHead className="text-xs font-medium text-mutedBlue">
                    %
                  </TableHead>
                  <TableHead className="text-xs font-medium text-mutedBlue">
                    No. of Users
                  </TableHead>
                  <TableHead className="text-xs font-medium text-mutedBlue">
                    Country
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {category.map((plan, index) => (
                  <TableRow key={index}>
                    <TableCell className="py-2">
                      {' '}
                      {/* Adjusted padding */}
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-blue-700" />
                        <span className="text-xs font-semibold text-deepBlue">
                          {plan.categoryName}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-3 text-xs font-medium text-deepBlue">
                      {plan.percentage}
                    </TableCell>
                    <TableCell className="py-3 text-xs font-medium text-deepBlue">
                      {' '}
                      {plan.users}
                    </TableCell>
                    <TableCell className="py-3">
                      {' '}
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
        </CardContent>
      </Card>
    </div>
  );
};

export default TopCategories;
