import * as React from 'react'
import ClassNames from 'classnames'
import { TagCheckedProps } from './interface'
import Tag from './tag'

const noop = () => {}

const defaultProps: TagCheckedProps = {
  checked: false,
  onChange: noop,
  disabled: false,
  type: 'primary'
}

const prefixCls = 'cp-ui-tag'

const getClassNames = ({ type, checked, disabled }: TagCheckedProps) => {
  return ClassNames({
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-disabled`]: disabled
  })
}

const handleChange = ({ checked, onChange, disabled }: TagCheckedProps) => {
  if (disabled) return
  const nextChecked = !checked
  onChange(nextChecked)
}

const TagChecked: React.FC<TagCheckedProps> & {
  defaultProps: Partial<TagCheckedProps>
} = props => {
  const classStr = getClassNames(props)
  return (
    <Tag className={classStr} onClick={() => handleChange(props)}>
      {props.children}
    </Tag>
  )
}

TagChecked.defaultProps = defaultProps

export default TagChecked
