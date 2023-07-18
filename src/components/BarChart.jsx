"use client";
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    setChartData({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
              {
                label: 'Watermark',
                data: [500, 200, 400, 600, 24182, 17842, 22475],
                borderColor: 'rgb(255, 177, 193)',
                backgroundColor: 'rgb(255, 177, 193)',
              }, 
              {
                label: 'Certificate',
                data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                borderColor: 'rgb(255, 255, 255,)',
                backgroundColor: 'rgb(53, 162, 235, 0.4)',
              }, 
        ]
    })
    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [])
  return (
 
      <div className='  relative lg:w-[75%] md:w-[100%]  max-sm:w-[100%]  p-4 rounded-main bg-white dark:bg-secondary'>
        <Bar data={chartData} options={chartOptions} />
      </div>

  );
};
export default BarChart;
