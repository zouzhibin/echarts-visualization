import React, { useMemo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { deepMerge } from '@jiaminghi/charts/lib/util/index'
import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'
import useAutoResize from '../use/autoResize'
import './style.less'

const defaultColor = ['#6586ec', '#2cf7fe']
const BorderBox = forwardRef(({ children, className, style, color = [], backgroundColor = 'transparent' }, ref) => {
  const { width, height, domRef } = useAutoResize(ref)
  const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
  const classNames = useMemo(() => classnames('my-border-box-1', className), [className,])
  const styles = useMemo(() => ({
    // boxShadow: `inset 0 0 25px 3px ${mergedColor[0]}`,
    ...style
  }), [style, mergedColor])
  return (
    <div className={classNames} style={styles} ref={domRef}>
      <svg className="dv-border-svg-container" width={width} height={height}>
        {/* 滤镜（f1）----向内阴影 */}
        <defs>
          <filter id="f1" x="-10%" y="-10%" width="200%" height="200%">
            <feComponentTransfer in="SourceAlpha">
              <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="3" />
            <feOffset result="offsetblur" dx="0" dy="0" />
            <feFlood floodColor={mergedColor[0]} floodOpacity="1" result="color"/>
            <feComposite in2="offsetblur" operator="in"/>
            <feComposite in2="SourceAlpha" operator="in"/>
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode />
            </feMerge>
          </filter>
        </defs>
        {/* 多边形----引用f1滤镜（阴影） */}
        <polygon
          filter="url(#f1)"
          points={`3,30 3,18 23,3  ${width - 18},3 ${width - 3},18 ${width - 3},${height - 18} ${width - 23},${height - 3} 18,${height - 3} 3,${height - 18}`} />
        {/* 整体多边形边框 */}
        <path
          fill={backgroundColor}
          stroke={mergedColor[0]}
          d={`M 3 30 L 3 18 L 23 3 L ${width - 18} 3 L ${width - 3} 18 L ${width - 3} ${height - 18} L ${width - 23} ${height - 3} L 18 ${height - 3} L 3 ${height - 18} Z`}
        />
        {/* 左上角 高亮线 */}
        <path
          fill="transparent"
          stroke={mergedColor[1]}
          d="M 3 33 L 3 18 L 23 3 L 33 3"
        />
        {/* 右下角 高亮线 */}
        <path
          fill="transparent"
          stroke={mergedColor[1]}
          d={`M ${width - 3} ${height - 33} L ${width - 3} ${height - 18} L ${width - 23} ${height - 3} L ${width - 33} ${height - 3}`}/>
        {/* 右上角 高亮三角多边形 */}
        <polygon fill={defaultColor[1]} points={` ${width - 15}, 3 ${width - 3}, 3 ${width - 3}, 15`} />
      </svg>
      <div className="border-box-content">{ children }</div>
    </div>
  )
})

BorderBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.array,
  backgroundColor: PropTypes.string,
}

export default BorderBox
