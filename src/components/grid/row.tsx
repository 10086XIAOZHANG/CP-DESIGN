import * as React from 'react'
import ClassNames from 'classnames'
import RowContext from './rowContext'
import { RowProps } from './interface'
import './style/index.scss'

const defaultProps: RowProps = {
  align: 'top',
  gutter: 0,
  justify: 'start'
}

const prefixCls = 'cp-ui-row'

const getClassNames = ({ align, justify, wrap }: RowProps) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-${align}`]: !!align,
    [`${prefixCls}-${justify}`]: !!justify,
    [`${prefixCls}-nowrap`]: wrap === 'nowrap',
    [`${prefixCls}-wrap`]: wrap === 'wrap',
    [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse'
  })
}

const Row: React.SFC<RowProps> & { defaultProps: Partial<RowProps> } = props => {
  const { children, style, gutter } = props
  const classStr = getClassNames(props)
  const rowStyle =
    (gutter as number) > 0
      ? {
          marginLeft: (gutter as number) / -2,
          marginRight: (gutter as number) / -2,
          ...style
        }
      : style
  return (
    <RowContext.Provider value={{ gutter }}>
      <div className={classStr} style={rowStyle}>
        {children}
      </div>
    </RowContext.Provider>
  )
}

Row.defaultProps = defaultProps

export default Row
