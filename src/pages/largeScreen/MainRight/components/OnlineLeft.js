import React from 'react'
import '../css/OnlineLeft.less'
import { Progress } from 'antd';
import USmallTitle from '@/components/USmallTitle'
import UPointTitle from '@/components/UPointTitle';
import UChartLineLeft from './UChartLineLeft'

export default () => {
  return (
    <div className="OnlineLeft">
      <USmallTitle title='折现图' />
      <div className="OnlineLeftFooter">
        <div className="online-num" >

        </div>
        <div className="OnlineLeft-center">
          <div className="progress-wrap">
            <div className="progress-inner">
              <div className="progress-item">
                <div className="point" />
                <span>公共1</span>
              </div>
              <span>14874</span>
            </div>
            <Progress
              strokeColor={{
                '0%': '#01a2d7',
                '100%': '#1ed6ed',
              }}
              percent={30} style={{width:'100%'}} showInfo={false}/>
          </div>
          <div className="progress-wrap">
            <div className="progress-inner">
              <div className="progress-item">
                <div className="point" />
                <span>公共2</span>
              </div>
              <span>14874</span>
            </div>
            <Progress
              strokeColor={{
                '0%': '#325ccd',
                '100%': '#4f98f3',
              }}
              percent={30} style={{width:'100%'}} showInfo={false}/>
          </div>
          <div className="progress-wrap">
            <div className="progress-inner">
              <div className="progress-item">
                <div className="point" />
                <span>公共3</span>
              </div>
              <span>14874</span>
            </div>
            <Progress
              strokeColor={{
                '0%': '#eb5f4a',
                '100%': '#ffa693',
              }}
              percent={30} style={{width:'100%'}} showInfo={false}/>
          </div>
        </div>
        <div>
          <UPointTitle title='在线趋势变化'/>
        </div>
        <div style={{flex:1}} >
          <UChartLineLeft/>
        </div>
      </div>

    </div>
  )
}
