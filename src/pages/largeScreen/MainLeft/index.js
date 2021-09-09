import React, { useState } from 'react';
import './css/index.less'
import LeftHeder1 from './left/index'
import MotorVehicleScroll from './components/MotorVehicleScroll'
import Driver from './MainLeftRight/Driver'
import { MyBorderBox2 } from '@/components/borders'
import USmallTitle from '@/components/USmallTitle';
import UChartParFooter from './components/UChartParFooter'

export default () => {
  return (
    <div className="left" >
      <div className="left-header">
        <div className="item-1">
          <MyBorderBox2>
            <LeftHeder1/>
          </MyBorderBox2>
        </div>
        <MotorVehicleScroll/>
      </div>
      <div className="left-footer">
        <div className="item-1">
          <USmallTitle title='饼图环状'/>
          <div className="box">
            <UChartParFooter/>
          </div>
        </div>
        <div  className="item-2">

          <USmallTitle title='进度条'/>
          <Driver/>
        </div>
      </div>
    </div>
  )
}
