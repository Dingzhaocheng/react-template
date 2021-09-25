import { EChartsOption } from "echarts";
import data from "./charts.json";
const dataNames = data.map(i => i.name);


export const options: EChartsOption = {
    title: {
        text: "测试表格-react-hook"
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
}