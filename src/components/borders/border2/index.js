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
  const classNames = useMemo(() => classnames('my-border-box-2', className), [className,])
  const styles = useMemo(() => ({
    // boxShadow: `inset 0 0 25px 3px ${mergedColor[0]}`,
    ...style
  }), [style])
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
          points={`3, 35 23, 15 ${width-135}, 15 ${width-121}, 3 ${width-65}, 3 ${width-55}, 13 ${width-23}, 13 ${width-3}, 28 
             ${width-3}, ${height-33} ${width-23}, ${height-13} ${width-55}, ${height-13} ${width-65}, ${height-3} ${width-127}, ${height-3} ${width-138}, ${height-13} 23, ${height-13} 3, ${height-33}`} />
        {/* 整体多边形边框 */}
        <path
          fill={backgroundColor}
          stroke={mergedColor[0]}
          d={
            `M 3 35 L 23 15 L ${width-135} 15 L ${width-121} 3 L ${width-65} 3 L ${width-55} 13 L ${width-23} 13 L ${width-3} 28 
            L ${width-3} ${height-33} L ${width-23} ${height-13} L ${width-55} ${height-13} L ${width-65} ${height-3} L ${width-127} ${height-3} L ${width-138} ${height-13} L 23 ${height-13} L 3 ${height-33} Z`
          }
        />
        {/* 多边形方块（装饰） */}
        <polygon fill={defaultColor[1]} points={` ${width-61}, 3 ${width-53}, 10 ${width-24}, 10 ${width-34}, 3 `} />
        <polygon fill={defaultColor[1]} points={`${width-132}, ${height-3} ${width-141}, ${height-11} ${width-151}, ${height-11} ${width-142}, ${height-3}`} />
        <polygon fill={defaultColor[1]} points={`${width-147}, ${height-3} ${width-156}, ${height-11} ${width-166}, ${height-11} ${width-157}, ${height-3}`} />
        <polygon fill={defaultColor[1]} points={`${width-162}, ${height-3} ${width-171}, ${height-11} ${width-181}, ${height-11} ${width-172}, ${height-3}`} />
        <polygon fill={defaultColor[1]} points={`${width-177}, ${height-3} ${width-186}, ${height-11} ${width-196}, ${height-11} ${width-187}, ${height-3}`} />
        <polygon fill={defaultColor[1]} points={`${width-192}, ${height-3} ${width-202}, ${height-11} 38, ${height-11} 48, ${height-3}`} />
        <polygon fill={defaultColor[1]} points={`43, ${height-3} 33, ${height-11} 23, ${height-11} 33, ${height-3}`} />
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
