import * as React from 'react'
import ClassNames from 'classnames'
import { AvatarProps } from './interface'
import Icon from '../icon'

import './style/index.scss'

const noop = () => {}

const prefixCls = 'cp-ui-avatar'

const defaultProps: AvatarProps = {
  size: 'normal',
  shape: 'circle',
  onError: noop,
  onClick: noop
}

const getClassNames = ({ size, shape, src, icon }: AvatarProps) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-${size}`]: !!size && typeof size === 'string',
    [`${prefixCls}-${shape}`]: !!shape,
    [`${prefixCls}-image`]: src,
    [`${prefixCls}-icon`]: icon
  })
}

const getChildren = ({ icon, src, alt, children, srcSet, onError }: AvatarProps) => {
  let childrenNode = children
  if (icon) {
    childrenNode = <Icon type={icon} />
  } else if (src) {
    childrenNode = <img src={src} srcSet={srcSet} alt={alt} onError={onError} />
  }
  return childrenNode
}

const getStyle = ({ size, icon }: AvatarProps) => {
  let style: any = {}
  if (typeof size === 'number') {
    style.height = size
    style.width = size
    style.lineHeight = `${size}px`
    style.fontSize = icon ? size / 2 : 18
  }
  return style
}

const Avatar: React.SFC<AvatarProps> & { defaultProps: Partial<AvatarProps> } = props => {
  const classStr = getClassNames(props)
  const style = getStyle(props)
  return (
    <span className={classStr} style={style} onClick={props.onClick}>
      <span className="avatar_ava">{getChildren(props)}</span>
    </span>
  )
}

Avatar.defaultProps = defaultProps

export default Avatar
