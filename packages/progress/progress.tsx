import * as React from 'react'
import ClassNames from 'classnames'
import { ProgressProps } from './interface'

import './style/index.scss'

const defaultProps: ProgressProps = {
  size: 'medium',
  type: 'line',
  percent: 0,
  status: 'normal',
  position: 'normal',
  unfilled: true,
  showInfo: true
}

const prefixCls = 'cp-ui-progress'

const getClassNames = ({ type, size, status, showInfo, position, unfilled }: ProgressProps) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-fixed-outer`]: position === 'fixed',
    [`${prefixCls}-unfilled`]: !unfilled,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-${status}`]: status,
    [`${prefixCls}-show-info`]: showInfo
  })
}

const getInnerStyle = ({ activeColor, percent }: ProgressProps) => {
  let style: any = { width: `${percent}%` }
  if (activeColor) {
    style.backgroundColor = activeColor
  }
  return style
}

const getOuterStyle = ({ width }: ProgressProps) => {
  let style: any = {}
  if (width) {
    style.width = width
  }
  return style
}

const renderCircleText = ({ textRender, percent }: ProgressProps) => {
  if (textRender && typeof textRender === 'function') {
    return <div className={`${prefixCls}-circle-text`}>{textRender(percent)}</div>
  }
  return <div className={`${prefixCls}-circle-text`}>{`${percent}%`}</div>
}

const renderLine = (props: ProgressProps) => {
  const { showInfo, position, percent } = props
  const innerStyle = getInnerStyle(props)
  const outStyle = getOuterStyle(props)
  return (
    <React.Fragment>
      <div className={`${prefixCls}-container`}>
        <div className={`${prefixCls}-outer`} style={outStyle}>
          <div className={`${prefixCls}-inner`} style={innerStyle} />
        </div>
      </div>
      {showInfo && position === 'normal' ? (
        <div className={`${prefixCls}-info`}>{`${percent}%`}</div>
      ) : null}
    </React.Fragment>
  )
}

const renderCircle = (props: ProgressProps) => {
  const { activeColor, percent } = props
  const style = activeColor ? { stroke: activeColor } : {}
  const strokeDashoffset = 289 * (1 - percent / 100)
  return (
    <React.Fragment>
      <svg className={`${prefixCls}-circle-container`} viewBox="0 0 100 100">
        <path
          className={`${prefixCls}-circle-outer`}
          d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
          fill-opacity="0"
        />
        <path
          className={`${prefixCls}-circle-inner`}
          d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
          fill-opacity="0"
          strokeDasharray="289 289"
          strokeDashoffset={strokeDashoffset}
          style={style}
        />
      </svg>
      {renderCircleText(props)}
    </React.Fragment>
  )
}

const Progress: React.FC<ProgressProps> & { defaultProps: Partial<ProgressProps> } = props => {
  const { type } = props
  const classStr = getClassNames(props)
  return (
    <div className={classStr}>{type === 'circle' ? renderCircle(props) : renderLine(props)}</div>
  )
}

Progress.defaultProps = defaultProps

export default Progress
