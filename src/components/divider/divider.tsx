import * as React from 'react'
import classNames from 'classnames'
import { DivideProps } from './interface'

import './style/index.scss'

const defaultProps: DivideProps = {
  type: 'horizontal',
  orientation: 'center',
  dashed: false
}

const prefixCls = 'cp-ui-divider'

const getClassNames = ({ type, orientation, dashed, className, children }: DivideProps) => {
  return classNames(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${orientation}`]: children ? orientation : false,
    [`${prefixCls}-dashed`]: dashed
  })
}

const Divide: React.SFC<DivideProps> & { defaultProps: Partial<DivideProps> } = props => {
  const classStr = getClassNames(props)
  const { children } = props
  return (
    <div className={classStr}>
      {children ? <span className={`${prefixCls}-inner-text`}>{children}</span> : null}
    </div>
  )
}

Divide.defaultProps = defaultProps

export default Divide
