import React, { useState } from 'react';
import SuccessRate from './SuccessRate'

import '../css/MotorVehicleScroll.less'
import UContentScroll from '@/components/UContentScroll'

export default () => {
  return (
    <div className="item-2 MotorVehicleScroll">
      <div style={{flex:1,overflow:'hidden'}}>
        <UContentScroll/>
      </div>

    </div>
  )
}
