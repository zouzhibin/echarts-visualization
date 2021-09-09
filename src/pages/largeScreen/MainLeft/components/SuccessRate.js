import React from 'react'
import '../css/SuccessRate.less'

import UPointTitle from '@/components/UPointTitle'
export default () => {
  return (
    <div className="SuccessRate">
      <div>
        <UPointTitle title='八类重点车三率达标率'/>
      </div>
      <div className="inner">
        <div className="item-rate item-rate-first">
          <div className="placeholder-img">
            <img src={rateImgOne} style={{width:'100%',verticalAlign:'inherit'}}/>
          </div>
          <div>旅游客车</div>
        </div>
        <div className="item-rate2">
          <div>
            <div className="label">检验率</div>
            <div className="num">98.2%</div>
          </div>
        </div>
        <div className="item-rate2">
          <div>
            <div className="label">检验率</div>
            <div className="num">98.2%</div>
          </div>
        </div>
        <div className="item-rate2">
          <div>
            <div className="label">检验率</div>
            <div className="num">98.2%</div>
          </div>
        </div>
      </div>
      <div className="inner">
        <div className="item-rate item-rate-first">
          <div className="placeholder-img">
            <img src={rateImgTwo} style={{width:'100%',verticalAlign:'inherit'}}/>
          </div>
          <div>旅游客车</div>
        </div>
        <div className="item-rate2">
          <div>
            <div className="label">检验率</div>
            <div className="num">98.2%</div>
          </div>
        </div>
        <div className="item-rate2">
          <div>
            <div className="label">检验率</div>
            <div className="num">98.2%</div>
          </div>
        </div>
        <div className="item-rate2">
          <div>
            <div className="label">检验率</div>
            <div className="num">98.2%</div>
          </div>
        </div>
      </div>
      <div className="inner">
      <div className="item-rate item-rate-first">
        <div className="placeholder-img">
          <img src={rateImgOne} style={{width:'100%',verticalAlign:'inherit'}}/>
        </div>
        <div>旅游客车</div>
      </div>
      <div className="item-rate2">
        <div>
          <div className="label">检验率</div>
          <div className="num">98.2%</div>
        </div>
      </div>
      <div className="item-rate2">
        <div>
          <div className="label">检验率</div>
          <div className="num">98.2%</div>
        </div>
      </div>
      <div className="item-rate2">
        <div>
          <div className="label">检验率</div>
          <div className="num">98.2%</div>
        </div>
      </div>
    </div>

    </div>
  )
}
