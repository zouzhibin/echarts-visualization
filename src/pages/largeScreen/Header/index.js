import React from 'react'

import { Decoration5, Decoration8 } from '@jiaminghi/data-view-react'
import UCenterTitle from '@/components/UCenterTitle'
import './css/index.less'

export default () => {
  return (
    <div id="top-header">
      <Decoration8 className="header-left-decoration" />
      <Decoration5 className="header-center-decoration" />
      <Decoration8 className="header-right-decoration" reverse={true} />
      <div className="center-title">测试大屏数据</div>

    </div>
  )
}
