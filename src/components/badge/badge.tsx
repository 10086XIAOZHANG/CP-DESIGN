import * as React from 'react'
import ClassNames from 'classnames'
import { BadgeProps } from './interface'

import './style/index.scss'

const defaultProps: BadgeProps = {
  dot: false,
  overflowCount: 99,
  prefixCls: 'cp-ui-badge'
}

const getClassNames = ({ status, prefixCls, children }: BadgeProps) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-${status}`]: status,
    [`${prefixCls}-no-wrapper`]: !children
  })
}

const renderCount = ({ count, overflowCount, dot, prefixCls }: BadgeProps) => {
  // dot 和 count都存在的时候优先dot
  if (dot) {
    return <sup className={`${prefixCls}-dot`} />
  }
  if (count) {
    let content: any
    const classStr = ClassNames(`${prefixCls}-count`, {
      [`${prefixCls}-custom`]: typeof count !== 'number'
    })
    if (typeof count === 'number') {
      content = count <= overflowCount ? count : `${overflowCount}+`
    } else {
      content = count
    }
    return <sup className={classStr}>{content}</sup>
  }
  return null
}

const Badge: React.SFC<BadgeProps> & { defaultProps: Partial<BadgeProps> } = props => {
  const { children } = props
  return (
    <div className={getClassNames(props)}>
      {children}
      {renderCount(props)}
    </div>
  )
}

Badge.defaultProps = defaultProps

export default Badge
