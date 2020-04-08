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
  let _style: any = {}
  if (typeof size === 'number') {
    _style.height = size
    _style.width = size
    _style.lineHeight = `${size}px`
    _style.fontSize = icon ? size / 2 : 18
  }
  return _style
}

const Avatar: React.FC<AvatarProps> & { defaultProps: Partial<AvatarProps> } = props => {
  const classStr = getClassNames(props)
  const _style = getStyle(props)
  return (
    <span className={classStr} style={props.style ?? _style} onClick={props.onClick}>
      <span className="avatar_ava">{getChildren(props)}</span>
    </span>
  )
}

Avatar.defaultProps = defaultProps

export default Avatar
