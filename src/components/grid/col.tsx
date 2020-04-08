import * as React from 'react'
import ClassNames from 'classnames'
import RowContext from './rowContext'
import { ColProps } from './interface'
import './style/index.scss'

const { useContext } = React

const defaultProps: ColProps = {
  offset: 0
}

const prefixCls = 'cp-ui-col'

const getStyle = ({ style }: ColProps) => {
  const { gutter } = useContext(RowContext)
  const styleCopy = {
    paddingLeft: (gutter as number) / 2,
    paddingRight: (gutter as number) / 2,
    ...style
  }
  return styleCopy
}

const getClassNames = ({ offset, span, className }: ColProps) => {
  return ClassNames(className, {
    [`${prefixCls}-offset-${offset}`]: !!offset,
    [`${prefixCls}-${span}`]: span !== undefined
  })
}

const Col: React.FC<ColProps> & { defaultProps: Partial<ColProps> } = props => {
  const style = getStyle(props)
  const classStr = getClassNames(props)
  return (
    <div className={classStr} style={style}>
      {props.children}
    </div>
  )
}

Col.defaultProps = defaultProps

export default Col
