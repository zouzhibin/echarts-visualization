import { useState } from 'react';
import styles from './bottom.less'
import { DigitalFlop } from '@jiaminghi/data-view-react'
export default () => {
  const data = [
    {
      name: '今日',
      num: 131614
    },
    {
      name: '昨日',
      num: 131614
    },
    {
      name: '明日',
      num: 131614
    },
    {
      name: '他日',
      num: 131614
    }
  ]
  const [list, setList] = useState(data)
  // setTimeout(() => {
  //   const arr = [...data]
  //   arr[1].num = 3000
  //   setList(arr)
  // }, 3000);
  return (
    <ul className={styles.box}>
      {
        list.map(item => <li key={item.name}>
          <span>{item.name}</span>
          <DigitalFlop
            config={{ number: [item.num], style: { fill: '#BFA2FC', fontSize: 24 ,fontStyle:'italic'} }}
            style={{ width: '100%', height: '50px' }} />
        </li>)
      }

    </ul>
  );
};
