

import './QuestionsItemChart.css';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function OptionWithChart({ options }) {
  return (
    <div className="option-chart-list">
      {options.map((option, index) => {
        const chartData = {
          labels: [option.name],
          datasets: [
            {
              data: [option.percent],
              backgroundColor: '#95E5FF',
              barThickness: 90,
            }
          ]
        };

        const chartOptions = {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              min: 0,
              max: 100,
              display: false,
            },
            y: {
              display: false,
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
          }
        };

        return (
          <div key={index} className="option-chart-row">
            <div
              className="option-box"
              style={{
                backgroundImage: `url(${option.box_bg})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
              <h3>{option.name}</h3>
            </div>

            <div className="option-chart-container">
              <div className="option-chart">
                <Bar data={chartData} options={chartOptions} />
              </div>
              <div className="option-percent">
                {option.percent}%
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
