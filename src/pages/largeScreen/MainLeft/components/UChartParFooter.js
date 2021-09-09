import React, { useEffect,useRef } from 'react';
import * as Echarts from 'echarts'

const data = {
  abnormalQuantity:10,
  inventoryQuantity:8,
  totalQuantity:4,
  abnormalPercentage:8
}
const optionsData = [
  {value: data.abnormalQuantity, name: '异常数量'},
  {value: data.inventoryQuantity, name: '在库数量'},
]
export default ()=>{
  const chartRef = useRef(null)
  const options =  {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    title:{
      text:`${data.abnormalPercentage}%`,
      left:"center",
      top:"40%",
      textStyle:{
        color:"#FFFFFF",
        fontSize:28,
        align:"center"
      }
    },
    graphic:{
      type:"text",
      left:"center",
      top:"55%",
      style:{
        text:"异常占比",
        textAlign:"center",
        fill:" #C7C9CE",
        fontSize:12,
        fontWeight:700
      }
    },
    legend: {
      origin:"middle",
      left: 'center',
      bottom: '10%',
      textStyle: {
        color: '#FFFFFF',
        padding: [4,20,0,0]

      },
      // itemWidth:55,
      // itemGap: 10,
      icon: 'circle'
    },
    color : [ '#FF717C', '#4181FF', '#FFB859' ],
    series: [
      {
        name: `总量：${data.totalQuantity}`,
        type: 'pie',
        // center: ['53%', '45%'],    // 默认全局居中
        radius: ['50%', '60%'], // ,第一个内圆半径,第二个外圆半
        data: optionsData,
        // animationEasing: 'cubicInOut',
        // animationDuration: 2600,
        // selectedMode: 'single',
        itemStyle: {
          normal: {
            color(params) {
              // 自定义颜色
              // color : [ '#FF717C', '#4181FF', '#FFB859' ],
              const colorList = [ '#FF717C', '#4181FF', '#FFB859' ]
              return colorList[params.dataIndex]
            }
          }
        },
        label: {
          normal: {
            formatter (params){
              if(params.name==='异常数量'){
                params.name='异常'
              }
              if(params.name==='在库数量'){
                params.name='在库'
              }
              return `${params.name}\n${params.value}`
            }
          }
        }
      }
    ]
  }

  function useChart (chartRef, options) {
    let myChart = null;
    function renderChart() {
      const chart = Echarts.getInstanceByDom(chartRef.current)
      if (chart) {
        myChart = chart
      } else {
        myChart = Echarts.init(chartRef.current)
      }
      myChart.setOption(options)
    };

    useEffect(() => {
      renderChart()
    }, [options])

    useEffect(() => {
      return () => {
        myChart && myChart.dispose()
      }
    }, [])
  }

  useChart(chartRef, options)

  return (
    <div style={{width: "100%", height: "100%"}} ref={chartRef} />
  )
}
