import { Line } from 'react-chartjs-2';
import {
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale,
  Chart as ChartJS,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

// Custom Plugin with Validation
const backgroundPlugin = {
  id: 'backgroundPlugin',
  beforeDraw(chart) {
    if (!chart.chartArea) return; // Ensure chartArea is available

    const { ctx, chartArea } = chart;
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.top,
      0,
      chartArea.bottom
    );
    gradient.addColorStop(0, 'rgba(76, 175, 80, 0.3)'); // Start color
    gradient.addColorStop(1, 'rgba(76, 175, 80, 0)'); // End color

    ctx.save();
    ctx.fillStyle = gradient;
    ctx.fillRect(
      chartArea.left,
      chartArea.top,
      chartArea.width,
      chartArea.height
    );
    ctx.restore();
  },
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    backgroundPlugin, // Register custom plugin
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
      fill: false, // No dataset fill; handled by plugin
    },
  ],
});

function PerformanceChart() {
  return (
    <div className="h-10 w-20">
      <Line
        options={options}
        data={generateData()}
        plugins={[backgroundPlugin]}
      />
    </div>
  );
}

export default PerformanceChart;
