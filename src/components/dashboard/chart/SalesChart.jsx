import React from 'react';
import {
  Title,
  Legend,
  Tooltip,
  BarElement,
  LinearScale,
  CategoryScale,
  Chart as ChartJS,
} from 'chart.js';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { ASSETS } from '../../../constants/assets';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      stacked: true,
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
      stacked: true,
    },
  },
};

const labels = [
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
const data = {
  labels,
  datasets: [
    {
      data: [65, 40, 90, 85, 35, 35, 40, 70, 65],
      backgroundColor: '#2196F3',
      borderRadius: {
        topLeft: 4,
        topRight: 4,
        bottomLeft: 0,
        bottomRight: 0,
      },
      barThickness: 25,
    },
    {
      data: [10, 10, 5, 5, 5, 5, 15, 10, 10],
      backgroundColor: '#E3F2FD',
      borderRadius: {
        topLeft: 0,
        topRight: 0,
        bottomLeft: 4,
        bottomRight: 4,
      },
      barThickness: 25,
    },
  ],
};

const SalesChart = () => {
  return (
    <div className="my-3 w-full rounded-xl bg-white p-6 shadow-soft-xl">
      <Card className="border-none shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
          <CardTitle className="text-lg font-bold">Yearly Sales</CardTitle>
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
        <CardContent className="p-0">
          <div className="w-full">
            <Bar options={options} data={data} />

            <div className="mt-7 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-paleBlue rounded-lg p-3">
                  <img
                    width={'100%'}
                    height={'100%'}
                    alt="total_sale"
                    className="h-4 w-4"
                    src={ASSETS.DASHBOARD.YEARLY_TOTAL_SALES}
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-deepBlue">
                    Total Sales
                  </p>
                  <p className="text-xs font-medium text-deepBlue">$36,358</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-paleBlue rounded-lg p-3">
                  <img
                    width={'100%'}
                    height={'100%'}
                    alt="total_expenses"
                    src={ASSETS?.DASHBOARD?.YEARLY_SALES_EXPENSES}
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-deepBlue">Expenses</p>
                  <p className="text-xs font-medium text-deepBlue">$5,296</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesChart;
