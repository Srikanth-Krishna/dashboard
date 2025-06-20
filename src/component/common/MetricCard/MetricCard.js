import React from 'react';
import './MetricCard.css';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { convertHexToRGBA } from '../../util/util';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

export default function MetricCard({
  icon: Icon,
  title,
  value,
  percentage,
  trend,
  sparklineData = [],
  color,
}) {
  const chartData = {
    labels: sparklineData.map((_, i) => i.toString()),
    datasets: [
      {
        data: sparklineData,
        borderColor: color,
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 3,
        fill: {
          target: 'origin',
          above: convertHexToRGBA(color, 0.4),
        },
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <>
      <div className='metric-header'>
        <div className='metric-header__left'>
          <div className='icon-container' style={{ backgroundColor: color }}>
            <Icon className='metric-icon' />
          </div>
          <div>
            <p className='metric-title'>{title}</p>
            <h2 className='metric-value'>{value}</h2>
          </div>
        </div>
        <div className={`percentage ${trend}`}>
          {trend === 'up' ? '▲' : '▼'} {percentage}%
        </div>
      </div>
      <div className='metric-footer'>
        <div className='chart-container'>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </>
  );
}
