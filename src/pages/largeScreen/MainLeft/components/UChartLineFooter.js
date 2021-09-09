import React, { useEffect,useRef } from 'react';
import * as Echarts from 'echarts'


export default ()=>{
  const chartRef = useRef(null)
  const options =  {

    title: [
      {
        show:false,
        text: '生产数据',
        left:'center',
        textStyle:{
          color:'#fff',
        }
      },
      {
        show:false,
        subtext: '(数据更新 : 12 : 30)',
        left:'right',
        subtextStyle:{
          fontSize:'12',
          color:'#C3CAD9',
        }
      }
    ],
    grid:{
      left:'10%',
      top:20,
      bottom:'30%',
    },


    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: [{name:'生产',icon:'none'}],
      x:"-5%",
      y:"center",
      textStyle: {
        fontSize: 16,
        color: "#D9EFFF"
      }
    },
    toolbox: { show: false },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1', '2', '3', '4', '5', '6', '7']
    },
    yAxis: {
      type: 'value',
      scale:true, //自适应刻度
      splitLine:{
        show:false// 去掉网格线
      },
      axisLabel: {
        formatter: '{value}'
      }
    },
    series: [
      {
        // name: '生产',
        type: 'line',
        data: [10, 11, 13, 11, 12, 12, 9],
        smooth: true,
        symbol: "none",//去掉折线小圆点
        markPoint: {
          symbolSize: 20,
          symbol: 'path://m 0,0 h 48 v 20 h -30 l -6,10 l -6,-10 h -6 z',
          symbolOffset:[3,-9],//位置偏移
          label: {
            fontSize: 9,
            offset: [0, -2],
          },
          data: [
            {type: 'max', name: '最大值'},
            {type: 'min', name: '最小值'}
          ]
        },
        itemStyle: {
          normal: {
            color: '#00B4B1',
            lineStyle:{
              width:4//设置线条粗细
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
