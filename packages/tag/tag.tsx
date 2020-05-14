import * as React from 'react'
import ClassNames from 'classnames'
import { TagProps } from './interface'
import Icon from '../icon'
import TagChecked from './tagChecked'
import './style/index.scss'

const { useState } = React

const noop = () => {}

const defaultProps: TagProps = {
  size: 'normal',
  onClick: noop,
  closable: false,
  onClose: noop
}

const prefixCls = 'cp-ui-tag'

const getClassNames = ({ size, closable, className }: TagProps) => {
  return ClassNames(prefixCls, className, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-closable`]: closable
  })
}

const getStyle = (color?: string) => {
  let style: any = {}
  if (color) {
    style.border = 'none'
    style.color = '#fff'
    style.background = color
  }
  return style
}

const handleClose = ({ event, setVisible, onClose }: any) => {
  event.stopPropagation()
  onClose()
  setVisible(false)
}

const Tag: React.FC<TagProps> & { defaultProps: Partial<TagProps> } = props => {
  const [visible, setVisible] = useState(true)
  const {
    closable,
    color,
    onClose,
    onClick,
    checked,
    onChange = noop,
    disabled = false,
    type = 'primary',
    style
  } = props
  const classStr = getClassNames(props)
  const wrapperStyle = getStyle(color)
  if (checked !== undefined) {
    return (
      <TagChecked checked={checked} onChange={onChange} disabled={disabled} type={type}>
        {props.children}
      </TagChecked>
    )
  }
  return visible ? (
    <div className={classStr} onClick={onClick} style={style}>
      <div className={`${prefixCls}-wrapper`} style={wrapperStyle}>
        <span className={`${prefixCls}-wrapper-content`}>{props.children}</span>
        {closable ? (
          <Icon type="close" onClick={event => handleClose({ event, setVisible, onClose })} />
        ) : null}
      </div>
    </div>
  ) : null
}

Tag.defaultProps = defaultProps

export default Tag
