import * as React from 'react'
import ClassNames from 'classnames'
import RcCheckbox from 'rc-checkbox'
import { CheckboxProps } from './interface'
import { omit } from '../utils'

import './style/index.scss'

const { useRef, useState } = React

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
interface CheckStateObjProps {
  isChange: boolean
  checked: boolean
}
interface CheckboxStateProps {
  setCheckState: React.Dispatch<React.SetStateAction<CheckStateObjProps>>
  checkState: CheckStateObjProps
}
/**
 * 类名wrapper
 * @param prefixCls 类前缀
 * @param disabled 是否禁用
 * @param checked 选中状态
 * @param indeterminate 半选状态 默认为false
 */
const wrapperClassName = (
  prefixCls: string | undefined,
  disabled: boolean | undefined,
  checked: boolean | undefined,
  indeterminate: boolean | undefined
) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-indeterminate`]: indeterminate
  })
}

const getClassName = (
  { disabled, checked, defaultChecked, indeterminate, prefixCls }: CheckboxProps,
  { checkState }: CheckboxStateProps
) => {
  if (checkState.isChange) {
    return wrapperClassName(prefixCls, disabled, checkState.checked, indeterminate)
  }
  if (defaultChecked === undefined && checked === undefined) {
    return wrapperClassName(prefixCls, disabled, false, indeterminate)
  }
  return wrapperClassName(
    prefixCls,
    disabled,
    checked !== undefined ? !!checked : defaultChecked,
    indeterminate
  )
}

const getOtherProps = (props: CheckboxProps) => {
  const omitStrs = [
    'onChange',
    'onMouseEnter',
    'onMouseLeave',
    'prefixCls',
    'indeterminate',
    'classNames',
    'children',
    'checked'
  ]
  let omitProps = omit(props, omitStrs)
  return omitProps
}

const handleChange = (
  e: Event,
  { onChange }: CheckboxProps,
  setCheckState: React.Dispatch<React.SetStateAction<CheckStateObjProps>>
) => {
  const checked = (e.target as HTMLInputElement).checked
  setCheckState({
    isChange: true,
    checked: checked
  })
  onChange(e)
}

const Checkbox: React.SFC<CheckboxProps> & { defaultProps: Partial<CheckboxProps> } = props => {
  const [checkState, setCheckState] = useState<CheckStateObjProps>({
    isChange: false,
    checked: props.checked !== undefined ? !!props.checked : false
  })
  const { children, prefixCls, onMouseEnter, onMouseLeave } = props
  const otherProps = getOtherProps(props)
  const checkboxRef = useRef(null)

  return (
    <label
      className={getClassName(props, { checkState, setCheckState })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className={`${prefixCls}-select`}>
        <RcCheckbox
          onChange={e => handleChange(e, props, setCheckState)}
          {...otherProps}
          ref={checkboxRef}
          checked={checkState.checked}
        />
        <span className={`${prefixCls}-select-inner`} />
      </span>
      <span className={`${prefixCls}-label`}>{children}</span>
    </label>
  )
}

Checkbox.defaultProps = defaultProps

export default Checkbox
