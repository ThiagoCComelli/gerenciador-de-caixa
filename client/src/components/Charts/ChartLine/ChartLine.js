import React from 'react';

import './ChartLine.css'

const ChartLine = () => {
    const data = [
        [0, 0],
        [0, 100],
        [0, 100],
        [1, 40],
        [2, 30],
        [3, 5],
        [4, 45],
        [5, 10],
        [6, 45],
        [7, 100],
        [7, 100],
        [7, 0]
    ]

    const maximumXFromData = Math.max(...data.map(e => e[0]));
    const maximumYFromData = Math.max(...data.map(e => e[1]));

    const chartWidth = 500
    const chartHeight = 300

    const points = data.map(element => {
        const x = (element[0] / maximumXFromData) * chartWidth;
        const y = chartHeight - (element[1] / maximumYFromData) * chartHeight;
        
        return [x,y];
    })

    const smoothing = 0.2

    const line = (pointA, pointB) => {
        const lengthX = pointB[0] - pointA[0]
        const lengthY = pointB[1] - pointA[1]
        return {
            length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
            angle: Math.atan2(lengthY, lengthX)
        }
    }

    const controlPoint = (current, previous, next, reverse) => {

        const p = previous || current
        const n = next || current

        const o = line(p, n)

        const angle = o.angle + (reverse ? Math.PI : 0)
        const length = o.length * smoothing

        const x = current[0] + Math.cos(angle) * length
        const y = current[1] + Math.sin(angle) * length
        return [x, y]
    }

    const bezierCommand = (point, i, a) => {

        const cps = controlPoint(a[i - 1], a[i - 2], point)

        const cpe = controlPoint(point, a[i - 1], a[i + 1], true)
        return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`
    }

    const svgPath = (points, command) => {
        const d = points.reduce((acc, point, i, a) => i === 0 
            ? `M ${point[0]},${point[1]}`
            : `${acc} ${command(point, i, a)}`
        , '')
        return (
            <path d={d}
                fill="#0074d977"
                stroke="#0074d9"
                strokeWidth={3}
            />
        )
    }

    const placePoints = () => {
        return (
            <>
            {points.map((point,index) => {
                if(index === 0 || index === points.length-1) return
                return <circle onMouseEnter={() => {alert(point[0])}} cx={point[0]} cy={point[1]} r="5" stroke="black" stroke-width="1" fill="#fff" />
            })}
            </>
        )
    }

    

    return (
        <div className="mainChartLine">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
                {svgPath(points, bezierCommand)}
                {placePoints()}
            </svg>
        </div>
        
    )
}

export default ChartLine
