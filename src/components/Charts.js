import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Charts({ logs, timeRange }) {
  const currentTime = new Date().getTime();
  const filteredLogs = logs.filter(log => (currentTime - new Date(log.timestamp).getTime()) / 60000 <= timeRange);

  const data = {
    labels: filteredLogs.map((log, index) => `Log ${index + 1}`),
    datasets: [
      {
        label: 'Battery Level',
        data: filteredLogs.map(log => log.batteryLevel),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return <Line data={data} />;
}
