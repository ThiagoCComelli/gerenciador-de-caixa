import React from 'react';
import { Line } from 'react-chartjs-2';
import './ChartLine.css'

const ChartLine = ({rawData}) => {

    const data = {
        labels: rawData.map((item) => item.date),
        datasets: [
          {
            label: "Saldo",
            data: rawData.map((item) => item.cumulative_sum),
            fill: false,
            borderColor: "#4286F5",
          }
        ]
    }

    const options = {
        responsive: true,
        elements: {
            line: {
                tension: .3
            }
        },
        plugins: {
            title: {
                display: true,
                text: "Saldo mensal (total por mes)"
            },
            legend: {
                display: false
            },
        },
        scales: {
            x: {
                grid: {
                  display: false,
                }
            },
            y: {
                grid: {
                  display: false,
                }
            },
        }
    }

    return (
        <div className="mainChartLine">
            <Line data={data} options={options}/>
        </div>
    );
}

export default ChartLine;
