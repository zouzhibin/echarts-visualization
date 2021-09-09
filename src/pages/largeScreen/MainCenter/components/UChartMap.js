import React, { useEffect,useRef } from 'react';
import * as Echarts from 'echarts'
import './china'

function randomData() {
  return Math.round(Math.random()*1000);
}
export default ()=>{
  const chartRef = useRef(null)
  const options =  {
    backgroundColor: '#0C1424',// 画布背景颜色
    tooltip: {
      show:false,
      trigger: 'item',
      axisPointer: {
        type: 'shadow',
      },
      padding: [20, 20],
    },
    toolbox: {
      show: false,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        // 辅助工具条
      }
    },
    geo: {
      show: true,
      zoom:1.15,
      map: 'china',
      label: { show: false },
      roam: false,
      itemStyle: {
        normal: {
          shadowColor: '#2A60BB',// 地图描边阴影颜色
          shadowBlur: 10,// 地图描边阴影宽度
          areaColor: '#000',
          borderWidth: 3, // 设置外层边框
          borderColor:'#628CC6',
          boxShadow:'4 5px 8px 0 #293c56'
        },
        emphasis: {
          show: false,
          // areaColor: '#01215c'
        }
      }
    },
    series: [
      {
        zoom:1.15,
        name: '中国',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12,
              fontWeight: '100',
              color: '#FFFFFF'
            }
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#0C1424',
            borderColor: '#183362',
            borderWidth: 1,
            color:'white'
          },
          emphasis: {
            show: true,
            areaColor: null
          }
        },
        data:[
          {name: '北京',value: randomData() },
          {name: '天津',value: randomData() },
          {name: '上海',value: randomData() },
          {name: '重庆',value: randomData() },
          {name: '河北',value: randomData() },
          {name: '河南',value: randomData() },
          {name: '云南',value: randomData() },
          {name: '辽宁',value: randomData() },
          {name: '黑龙江',value: randomData() },
          {name: '湖南',value: randomData() },
          {name: '安徽',value: randomData() },
          {name: '山东',value: randomData() },
          {name: '新疆',value: randomData() },
          {name: '江苏',value: randomData() },
          {name: '浙江',value: randomData() },
          {name: '江西',value: randomData() },
          {name: '湖北',value: randomData() },
          {name: '广西',value: randomData() },
          {name: '甘肃',value: randomData() },
          {name: '山西',value: randomData() },
          {name: '内蒙古',value: randomData() },
          {name: '陕西',value: randomData() },
          {name: '吉林',value: randomData() },
          {name: '福建',value: randomData() },
          {name: '贵州',value: randomData() },
          {name: '广东',value: randomData() },
          {name: '青海',value: randomData() },
          {name: '西藏',value: randomData() },
          {name: '四川',value: randomData() },
          {name: '宁夏',value: randomData() },
          {name: '海南',value: randomData() },
          {name: '台湾',value: randomData() },
          {name: '香港',value: randomData() },
          {name: '澳门',value: randomData() }
        ]
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
