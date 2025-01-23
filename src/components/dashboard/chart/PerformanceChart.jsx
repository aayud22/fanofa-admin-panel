import { Line } from 'react-chartjs-2';
import {
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale,
  Chart as ChartJS,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
      min: 0,
      max: 100,
    },
  },
  elements: {
    line: {
      tension: 0.4,
      borderColor: '#4CAF50',
      borderWidth: 1.5,
    },
    point: {
      radius: 0,
    },
  },
};

const generateData = () => ({
  labels: Array.from({ length: 10 }, (_, i) => i.toString()),
  datasets: [
    {
      data: [20, 40, 30, 70, 50, 60, 80, 65, 75, 85],
      fill: false,
    },
  ],
});

function PerformanceChart() {
  return (
    <div className="h-10 w-20">
      <Line options={options} data={generateData()} />
    </div>
  );
}

export default PerformanceChart;
