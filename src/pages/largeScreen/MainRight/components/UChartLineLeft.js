import React, { useEffect,useRef } from 'react';
import * as Echarts from 'echarts'


export default ()=>{
  const chartRef = useRef(null)
  const options = {
    color:['#A800FFFF','#0076FFFF'],
      tooltip: {
      trigger: 'axis'
    },
    // 去掉图例
    // legend: {
    //   icon: "roundRect",
    //     left:'3%',
    //     textStyle:{
    //     color:"#3b4e6f"
    //   },
    //   data: ['入库', '出库']
    // },
    calculable: true,
      xAxis: [
      {
        type: 'category',
        data: ['0时','4时','8时','12时','16时','20时'],
        axisLabel: {
          interval:0,
          textStyle: {
            color: '#FFFFFF',
          },
        },

      }
    ],
      yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#FFFFFF',
          },
        },
        splitLine:{
          lineStyle:{
            type:"solid",
            color:['#1e345c']
          },
          show: true

        },   //去除网格线
        axisLine:{
          show: false
        },
        axisTick:{
          show:false,
          alignWithLabel: true,
          lineStyle:{
            type:'dashed'
          }
        },
      },
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#FFFFFF',
          },
        },
        splitLine:{
          lineStyle:{
            type:"solid",
            color:['#1e345c']
          },
          show: true

        },   //去除网格线
        axisLine:{
          show: false
        },
        axisTick:{
          show:false,
          alignWithLabel: true,
          lineStyle:{
            type:'dashed'
          }
        },
      },
    ],
      // 调整位置
      grid:{
        left: '3%',
        right: '1%',
        bottom: '4%',
        top:'8%',
        containLabel: true
    },
    series: [
      {
        name: '入库',
        type: 'line',
        smooth: true,
        data: [1,12,29,38,49,34,24],
        lineStyle:{
          color:'#9371ec',
          width:2
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#19236b' // 0% 处的颜色
            },
              {
                offset: 0.59, color: '#2a3295' // 100% 处的颜色
              },{
                offset: 1, color: '#3b37bf' // 100% 处的颜色
              }],
            global: false // 缺省为 false
          }
        },
      },

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
