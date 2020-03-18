import * as React from 'react'
import ClassNames from 'classnames'
import RcCheckbox from 'rc-checkbox'
import { CheckboxProps } from './interface'
import { omit } from '../utils'

import './style/index.scss'

const { useRef } = React

const noop = () => {}

const defaultProps: CheckboxProps = {
  onChange: noop,
  onBlur: noop,
  onFocus: noop,
  autoFocus: false,
  disabled: false,
  indeterminate: false,
  prefixCls: 'cp-ui-checkbox',
  onKeyDown: noop,
  onKeyPress: noop,
  onMouseEnter: noop,
  onMouseLeave: noop
}

const getClassName = ({ disabled, checked, indeterminate, prefixCls }: CheckboxProps) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-checked`]: !!checked,
    [`${prefixCls}-indeterminate`]: indeterminate
  })
}

const getOtherProps = (props: CheckboxProps) => {
  const omitStrs = [
    'onChange',
    'onMouseEnter',
    'onMouseLeave',
    'prefixCls',
    'indeterminate',
    'classNames',
    'children'
  ]
  let omitProps = omit(props, omitStrs)
  if ('checked' in props) {
    delete omitProps.defaultChecked
  }
  return omitProps
}

const handleChange = (e: Event, { onChange }: CheckboxProps) => {
  const checked = (e.target as HTMLInputElement).checked
  onChange(checked)
}

const Checkbox: React.SFC<CheckboxProps> & { defaultProps: Partial<CheckboxProps> } = props => {
  const { children, prefixCls, onMouseEnter, onMouseLeave } = props
  const otherProps = getOtherProps(props)
  const checkboxRef = useRef(null)
  return (
    <label className={getClassName(props)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <span className={`${prefixCls}-select`}>
        <RcCheckbox onChange={e => handleChange(e, props)} {...otherProps} ref={checkboxRef} />
        <span className={`${prefixCls}-select-inner`} />
      </span>
      <span className={`${prefixCls}-label`}>{children}</span>
    </label>
  )
}

Checkbox.defaultProps = defaultProps

export default Checkbox
