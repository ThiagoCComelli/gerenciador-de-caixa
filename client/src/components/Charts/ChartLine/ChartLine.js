import { randomstring } from 'randomstring-js';
import React,{useEffect,useState} from 'react';

import './ChartLine.css'

const Chart = ({data}) => {

    const maximumXFromData = Math.max(...data.map(e => e[0]));
    const maximumYFromData = Math.max(...data.map(e => e[1]));

    const chartWidth = 700
    const chartHeight = 500

    const smoothing = 0.15

    const points = data.map(element => {
        const x = (element[0] / maximumXFromData) * chartWidth;
        const y = chartHeight - (element[1] / maximumYFromData) * chartHeight;
        
        return [x,y]
    })

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
                // eslint-disable-next-line
                if(index === 0 || index === points.length-1) return
                return <circle key={randomstring()} cx={point[0]} cy={point[1]} r="5" stroke="black" strokeWidth="1" fill="#fff" />
            })}
            </>
        )
    }

    return (
        <>
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
                {svgPath(points, bezierCommand)}
                {placePoints()}
            </svg>
        </>
    )
}

const ChartLine = ({rawData}) => {
    const [data,setData] = useState(null)

    useEffect(() => {
        const setupData = () => {
            var dataTmp = []
            
            dataTmp.push([0,0])
            dataTmp.push([0,rawData[0].cumulative_sum])
            for(let i = 0; i < rawData.length; i++) {
                dataTmp.push([i,rawData[i].cumulative_sum])
            }
            dataTmp.push([rawData.length-1,rawData[rawData.length-1].cumulative_sum])
            dataTmp.push([rawData.length-1,0])

            setData(dataTmp)
        }

        if(rawData.length >= 2) {
            setupData()
        }
    },[rawData])

    return (
        <div className="mainChartLine">
            {data ? <Chart data={data} /> : null}
        </div>
        
    )
}

export default ChartLine
