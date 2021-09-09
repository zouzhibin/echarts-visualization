import { useState } from 'react';
import styles from './index.less'
import { ActiveRingChart } from '@jiaminghi/data-view-react'
export default () => {
  const defaultConfig = {
    radius: '80%',
    activeRadius: '70%',
    data: [
      {
        name: '咨询',
        value: 55
      },
      {
        name: '咨询1',
        value: 120
      },
      {
        name: '咨询2',
        value: 78
      },
      {
        name: '咨询3',
        value: 66
      },
      {
        name: '咨询4',
        value: 80
      },
      {
        name: '咨询5',
        value: 80
      }
    ],
    digitalFlopStyle: {
      fontSize: 20
    },
    color: ['#5D2DFF', '#0C1D4F', '#01FFFF', '#A82AF9', '#F942A9', '#01FFFF']
  }
  const [activeTab, setActiveTab] = useState(0)
  const [config, setConfig] = useState(defaultConfig)
  return (
    <div className={styles.box}>
      <ul className={styles.tabs}>
        {
          ['当天', '近七天', '近一个月'].map((item, index) => <li key={item} onClick={() => setActiveTab(index)} className={activeTab === index ? styles.active : null} >{item}</li>)
        }
      </ul>
      <div className={styles.item1}>
        <span>24321</span>
        <ul>
          <li>同比 <span>3.45%</span> ^</li>
          <li>环比 <span>8.79%</span> ^</li>
        </ul>
      </div>
      <div className={styles.item2}>
        <ActiveRingChart config={config} style={{ width: '50%', height: '160px' }} />
        <ul>
          {defaultConfig.data.map((item, index) => <li key={index}><i style={{ background: defaultConfig.color[index] }}></i> {item.name} <span>1336</span></li>)}
        </ul>
      </div>
      <div className={styles.item3}>
        <h2>分数分析</h2>
        <ul>
          {
            [{ name: '测试1', num: 7227, color: '#5D2DFF' },
            { name: '测试1', num: 2310, color: '#0C1D4F' },
            { name: '测试1', num: 2827, color: '#01FFFF' },
            { name: '测试1', num: 2310, color: '#A82AF9' },
            { name: '测试1', num: 111, color: '#5D2DFF' },
            { name: '测试1', num: 2310, color: '#5D2DFF' },
            { name: '测试1', num: 111, color: '#5D2DFF' },
            { name: '测试1', num: 2310, color: '#F942A9' },
            { name: '测试1', num: 111, color: '#333' },
            { name: '测试1', num: 2310, color: '#666' },
            { name: '测试1', num: 111, color: '#999' },].map((item, index) => <li key={index}><i style={{ background: item.color }}></i><span>{item.name}</span><span>{item.num}</span></li>)
          }
        </ul>
      </div>
    </div>
  );
};
