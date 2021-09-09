import { useState, useEffect } from 'react';
import styles from './bottom2.less'
import Charts from '@jiaminghi/charts'
export default () => {
  const [activeTab, setActiveTab] = useState(0)
  useEffect(() => {
    const container = document.getElementById('rightBottom2')
    const myChart = new Charts(container)
    myChart.setOption({
      series: [
        {
          type: 'pie',
          data: [
            { name: '测试1', value: 93 },
            { name: '测试2', value: 32 }
          ],
          radius: ['40%', '55%'],
          insideLabel: {
            show: true
          },
          outsideLabel: {
            alignTo: 'edge',
            formatter: '{name}\n{value}',
            minMargin: 5,
            edgeDistance: 10,
            lineHeight: 15,
            rich: {
              time: {
                fontSize: 10,
                color: '#999'
              }
            },
            labelLineEndLength: 20
          },
        }
      ],
      color: ['#538CFF', '#E6B271']
    })
  }, [])
  return (
    <div className={styles.box}>
      <ul className={styles.tabs}>
        {
          ['测试1', '测试2'].map((item, index) => <li key={item} onClick={() => setActiveTab(index)} className={activeTab === index ? styles.active : null} >{item}</li>)
        }
      </ul>
      <div id="rightBottom2" className={styles.chart}></div>
    </div>
  );
};
