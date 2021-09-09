import React from 'react'
import './css/index.less'
import OnlineLeft from './components/OnlineLeft'
import TrafficOrderRight from './components/TrafficOrderRight'
import RightFooter1 from '../components/right/bottom'
import RightFooter2 from '../components/right/bottom2'
import RightFooter3 from '../components/right/bottom3'
export default () => {
  return (
    <div className="main-right" >
      <div className="top">
        <OnlineLeft/>
        <TrafficOrderRight/>

      </div>
      <div className="footer">
        <div style={{width: '43%'}}>
          <RightFooter1/>
          <RightFooter2/>
        </div>
        <div style={{width: '53%'}}>
          <RightFooter3/>
        </div>
      </div>
    </div>
  )
}
