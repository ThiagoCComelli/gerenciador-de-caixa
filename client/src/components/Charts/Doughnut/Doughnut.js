import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Doughnut.css'

const Doughnut_ = ({rawData}) => {

    const data = {
        labels: rawData.map((item) => item.title),
        datasets: [
            {
                label: 'My First Dataset',
                data: rawData.map((item) => item.cumulative_sum),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                ],
                hoverOffset: 4
                }
        ]
    }
    
    const options = {
        plugins: {
            title: {
                text: "Gastos por categoria (total)",
                display: true,
            },
            legend: {
                display: true
            },
        },
    }

    return (
        <div className="mainDoughnut">
            <Doughnut data={data} options={options}/>
        </div>
    );
}

export default Doughnut_;
