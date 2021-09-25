import * as echarts from "echarts";
import { EChartsOption } from "echarts/lib/echarts";
import React, { FC, useEffect, useRef } from "react";
import { EChartsInstance } from "../../types/types";


interface IProps {
    options:EChartsOption
}

const Chart:FC<IProps> = (props)=>{
    const {options} = props
    const chartRef = useRef<HTMLDivElement | null>(null)
    const echartsInstance = useRef<EChartsInstance | null>(null)

    const initCharts = ()=>{
       
        if (chartRef.current) {
            const chart  = echarts.init(chartRef.current as HTMLElement)
            chart.setOption(options as any)
            echartsInstance.current = chart
        }
        
    }


    const dispose = ()=>{
        if (!echartsInstance.current) {
            return
        }
      /*   echartsInstance.current.dispose()  不执行也居然会被回收，结合最近chrome 优化内存占用问题，需要考究下引擎垃圾回收
        echartsInstance.current = null */
    }



    useEffect(()=>{
        initCharts()
        return ()=>dispose()
        
    },[options])
    
    return (
        <div style={{width:'800px',height:'400px'}} ref={chartRef}></div>
    )
}


export default Chart


