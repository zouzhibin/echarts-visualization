import React, { useState,useEffect } from 'react';
import './index.less'
import S from './s.png'
let timeTime = null
let configArr = [
]
for(let i=0;i<12;i++){
  // (num%2 ==0) ?"偶数":"奇数")
  let className = i%2===0?'even':''
  configArr.push({value:i,label:i,cl:className})
}
export default ()=>{
  const [listData,setListData] = useState(configArr)
  const [animateUp,setAnimateUp] = useState(false)
  function scrollAnimate() {
    setAnimateUp(true)
    // timeTime&&clearTimeout(timeTime)
    timeTime = setTimeout(() => {
      listData.push(listData[0]);
      listData.shift();
      setListData([...listData])
      setAnimateUp(false)
    }, 500);
  }
  useEffect(()=>{
    let time = setInterval(scrollAnimate, 2000);
    return ()=>{
      time = null
    }
  },[0])
  return(
    <div className="marquee-wrap">
      <ul className={`marquee-list ${animateUp?'animate-up':''}`}>
        {
          listData.map((item,index)=>{
            return <li className={`item ${item.cl}`} key={item.value}>
              <div>
                <img src={S} style={{width:'16px',height:'12px'}}/>
                <span>测试轮播数据{item.value}</span>
              </div>
              <div>
                <span>{item.value}</span>
              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}
