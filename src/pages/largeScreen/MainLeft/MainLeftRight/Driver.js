import React, { useState } from 'react';
import { Progress } from 'antd';
import point from '../../img/point.png'
import './css/driver.less'
import UChartLineFooter from '../components/UChartLineFooter'
const arr = ['全部','A1','A2','B1','B2']
export default () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="driver" >
      <div className="driver-header">
        <div className="item-circle-wrap">
          <div className="item-circle">
            <Progress
              width={70}
              strokeLinecap="square"   type="circle" percent={75} />
            <span>进度1</span>
          </div>
          <div className="item-circle">
            <Progress
              width={70}
              strokeLinecap="square"   type="circle" percent={75} />
            <span>进度2</span>
          </div>
          <div className="item-circle">
            <Progress
              width={70}
              strokeLinecap="square"   type="circle" percent={75} />
            <span>进度3</span>
          </div>
        </div>
      </div>

      <div className="driver-footer">
        <div className="total-header">
          <img src={point} alt='点' style={{width:'17px'}}/>
          <span>测试2</span>
        </div>
        <div style={{flex:1}}>
            <UChartLineFooter/>
        </div>

      </div>
    </div>
  )
}
