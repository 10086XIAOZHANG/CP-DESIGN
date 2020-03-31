import * as React from 'react'
import ClassNames from 'classnames'
import * as warning from 'warning'
import './style'

const noop = () => {}

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  size?: string | number
  type?: string
  prefixCls: string
  className?: string
  //是否循环旋转
  spin?: boolean
  //是否旋转
  rotate?: boolean
  rotateDegree?: 0 | 90 | 180 | 270 | 360
  //是否翻转
  flip?: boolean
  flipOrder?: 'horizontal' | 'vertical'
  color?: string
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const defaultProps: IconProps = {
  prefixCls: 'cp-ui-icon',
  onClick: noop
}

const handleClick = (e: React.MouseEvent<HTMLElement>, { onClick }: IconProps) => {
  onClick(e)
}

const Icon: React.SFC<IconProps> & { defaultProps: Partial<IconProps> } = props => {
  const {
    prefixCls,
    type,
    size,
    color,
    spin,
    rotate,
    rotateDegree,
    flip,
    flipOrder,
    className,
    ...rest
  } = props
  warning(!!type, 'type should be required for icon')
  const classStr = ClassNames(prefixCls, className, 'fa', `fa-${type}`, {
    [`fa-spin`]: !!spin,
    [`fa-rotate-${rotateDegree}`]: !!rotate,
    [`fa-flip-${flipOrder}`]: !!flip
  })
  let style: React.CSSProperties = {
    color
  }
  if (size) {
    style.fontSize = size
  }

  return <i className={classStr} style={style} onClick={e => handleClick(e, props)} {...rest}></i>
}

Icon.defaultProps = defaultProps

export default Icon
