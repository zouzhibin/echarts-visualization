import { useState, useEffect } from 'react';
import styles from './bottom3.less'
import Charts from '@jiaminghi/charts'
import { ActiveRingChart } from '@jiaminghi/data-view-react'

export default () => {
  const [activeTab, setActiveTab] = useState(0)
  useEffect(() => {
    const container = document.getElementById('rightBottom3')
    const myChart = new Charts(container)
    myChart.setOption({
      grid: {
        top: 20,
        bottom: 20
      },
      xAxis: {
        data: ['12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        axisLine: {
          style: {
            stroke: '#1968A5',
            lineWidth: 1
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          style: {
            fill: '#869DC2',
            fontSize: 12,
          }
        }
      },
      yAxis: {
        data: 'value',
        axisLine: {
          style: {
            stroke: '#1968A5',
            lineWidth: 1
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          style: {
            fill: '#869DC2',
            fontSize: 12,
          }
        }
      },
      series: [
        {
          data: [1200, 2230, 1900, 2100, 3500, 4200, 3985, 1000],
          type: 'bar',
          gradient: {
            color: ['#5EA3FA', '#345CC9']
          },
          barStyle: {

          }
        }
      ]
    })
  }, [])
  const chart2Config = {
    radius: '80%',
    activeRadius: '76%',
    data: [
      {
        name: '咨询',
        value: 55
      },
      {
        name: '求助',
        value: 120
      },
      {
        name: '事故',
        value: 78
      },
      {
        name: '其他',
        value: 66
      },
      {
        name: '举报',
        value: 80
      },
      {
        name: '投诉',
        value: 80
      }
    ],
    digitalFlopStyle: {
      fontSize: 14,
      fill: '#2A76A4'
    },
    color: ['#5D2DFF', '#0C1D4F', '#01FFFF', '#A82AF9', '#F942A9', '#01FFFF']
  }
  return (
    <div className={styles.box}>
      <div className={styles.chart}>
        <div id="rightBottom3" style={{ width: '100%', height: '100%' }}></div>
        <div className={styles.tips}>
          <span>测试1</span>
          <span>测试1</span>
        </div>
      </div>
      <h2>测试1</h2>
      <div className={styles.chart2}>
        <ActiveRingChart config={chart2Config} style={{ width: '40%', height: '100px' }} />
        <ul>
          {
            [{
              name: '测试1',
              num: 122,
              color: '#5D2DFF'
            }, {
              name: '测试2',
              num: 155,
              color: '#0C1D4F'
            }, {
              name: '测试3',
              num: 166,
              color: '#01FFFF'
            }, {
              name: '测试4',
              num: 177,
              color: '#A82AF9'
            }, {
              name: '测试5',
              num: 188,
              color: '#F942A9'
            }].map(item => <li key={item.name}><i style={{background: item.color}}></i><span>{item.name}</span><span>{item.num}</span></li>)
          }
        </ul>
      </div>
    </div>
  );
};
