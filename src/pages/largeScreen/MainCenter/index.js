import React from 'react'
import './css/index.less'
import { MyBorderBox1 } from '@/components/borders'
import UChartBarCenter from './components/UChartBarCenter'
import UChartMap from './components/UChartMap'
export default () => {
  return (
    <div className="center">
      <div className="center-top">
        <UChartMap/>
      </div>
      <div className="center-footer">
        <MyBorderBox1>
          <UChartBarCenter/>
        </MyBorderBox1>
      </div>
    </div>
  )
}
