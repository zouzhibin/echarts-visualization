import React, { useEffect,useRef } from 'react';
import * as Echarts from 'echarts'


export default ()=>{
  const chartRef = useRef(null)
  const options =  {
    color:['#4B70F8'],
    xAxis: {
      axisLabel: {
        textStyle: {
          color: '#FFFFFF',
        },
        // 文字竖着显示
        interval:0,
        formatter(value){
          return value.split('').join('\n')
        }
      },
      type: 'category',
      // 在类目轴中 boundaryGap 只有两个值： true 和 false 坐标轴两端空白策略
      // boundaryGap: true,
      data: ['测试1', '测试2', '测试3', '测试4', '测试5', '测试6', '测试7'],
      axisTick:{
        show:false
      },
      axisLine:{
        show: true,
        lineStyle: {
          color:'#1e7eca'
        }
      },
    },
    // 调整位置
    grid:{
      // x: '30%', //相当于距离左边效果:padding-left
      // y: '30%', //相当于距离上边效果:padding-top
      top:'10%',
        // left:30,
        bottom:'5%',
      containLabel:true
    },
    yAxis: {
      show: true,
      nameTextStyle:{
        color:'#FFFFFF'
      },
      splitLine:{
        lineStyle:{
          type:"dashed",
            color:['#1e345c']
        },
        show: false
      },   // 去除网格线

      // 加上坐标轴线
      axisLine:{
        show: true,
        lineStyle: {
          color:'#1e7eca'
        }
      },
      axisTick:{
        show:false,
          alignWithLabel: true,
          lineStyle:{
          type:'dashed'
        }
      },
      // nameLocation:'start',
      // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      type: 'value',
        // scale : true,
        // boundaryGap : [ 0.65, 0.65 ],
      axisLabel: {
        margin:15, // 设置坐标轴文字和 坐标轴线的距离
        textStyle: {
         color: '#FFFFFF',
        },

      },
    },
    series: [
      {
        data: [2, 2, 2,2, 2,2,2],
        type: 'bar',
        stack: 'amount',
        areaStyle: {},
        smooth: true,
        barWidth:10,
        itemStyle:{
          normal:{
            barBorderColor:'rgba(0,0,0,0)',
            color:'rgba(0,0,0,0)'
          },
          emphasis:{
            barBorderColor:'rgba(0,0,0,0)',
            color:'rgba(0,0,0,0)'
          }
        },
      },
      {
      data: [55, 48, 45,38, 32,30,28],
      type: 'bar',
      stack: 'amount',
      areaStyle: {},
      smooth: true,
      barWidth:10,
      itemStyle: {
        normal: {
          // barBorderRadius: [6, 6, 0, 0],
          barBorderRadius:6,
          color: new Echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: '#249cf2'},

              {offset: 1, color: '#1dc2ef'}
            ], false)
        },

      },
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
