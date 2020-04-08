import * as React from 'react'
import ClassNames from 'classnames'
import { BadgeProps } from './interface'

import './style/index.scss'

const defaultProps: BadgeProps = {
  dot: false,
  overflowCount: 99,
  prefixCls: 'cp-ui-badge',
  corner: false
}

const getClassNames = ({ status, prefixCls, children }: BadgeProps) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-${status}`]: status,
    [`${prefixCls}-no-wrapper`]: !children
  })
}
const getOutStyle = (style: React.CSSProperties, corner: boolean) => {
  let _style: React.CSSProperties = {}
  if (!!corner) {
    _style.width = '100%'
  }
  _style = Object.assign(style, _style)
  return _style
}
const renderCount = ({ text, overflowCount, dot, prefixCls, corner, style }: BadgeProps) => {
  // dot 和 text都存在的时候优先dot
  if (dot) {
    return <sup className={`${prefixCls}-dot`} />
  }

  if (text) {
    let content: any
    const classStr = ClassNames(`${prefixCls}-text`, {
      [`${prefixCls}-custom`]: typeof text !== 'number',
      [`${prefixCls}-corner`]: !!corner
    })
    if (typeof text === 'number') {
      content = text <= overflowCount ? text : `${overflowCount}+`
    } else {
      content = text
    }
    return (
      <sup className={classStr} style={style}>
        {content}
      </sup>
    )
  }
  return null
}

const Badge: React.FC<BadgeProps> & { defaultProps: Partial<BadgeProps> } = props => {
  const { children, corner, outStyle } = props
  return (
    <div className={getClassNames(props)} style={getOutStyle(outStyle ?? {}, corner)}>
      {children}
      {renderCount(props)}
    </div>
  )
}

Badge.defaultProps = defaultProps

export default Badge
