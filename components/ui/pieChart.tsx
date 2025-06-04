// components/PieChart.tsx
'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface PieChartProps {
  databasename: string;
  instance: string | null;
  classifiedobjects: number;
  notclassifiedobjects: number;
}

export default function PieChart({
  databasename,
  instance,
  classifiedobjects,
  notclassifiedobjects,
}: PieChartProps) {
  const safeClassified = classifiedobjects ?? 0;
  const safeNotClassified = notclassifiedobjects ?? 0;
  const total = safeClassified + safeNotClassified;

  if (total === 0) {
    return (
      <div className="text-center p-6 text-gray-500">
        <p className="font-semibold">{instance ?? 'Unknown Instance'} - {databasename}</p>
        <p>No classification data available.</p>
      </div>
    );
  }

  const data = {
    labels: ['Classified', 'Not Classified'],
    datasets: [
      {
        data: [safeClassified, safeNotClassified],
        backgroundColor: ['#034694', '#00BFFF'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `${instance ?? 'Unknown Instance'} - ${databasename}`,
        font: {
          size: 20,
          weight: 'bold',
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || '';
            const value = context.parsed;
            const percent = ((value / total) * 100).toFixed(1);
            return `${label}: ${percent}% (${value})`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };
  const customLegend = (
    <div className="flex justify-center mt-4 gap-6 text-sm">
      <div className="flex items-center gap-2">
        <span className="w-4 h-4 inline-block rounded-full" style={{ backgroundColor: '#034694' }}></span>
        <span>Classified: {safeClassified} ({((safeClassified / total) * 100).toFixed(0)}%)</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-4 h-4 inline-block rounded-full" style={{ backgroundColor: '#00BFFF' }}></span>
        <span>Not Classified: {safeNotClassified} ({((safeNotClassified / total) * 100).toFixed(0)}%)</span>
      </div>
    </div>
  );

  return (
    <div className="text-center p-4">
      <Pie data={data} options={options as any} />
      {customLegend}
    </div>
  );
}