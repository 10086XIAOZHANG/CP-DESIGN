import * as React from 'react'
import ClassNames from 'classnames'
import { RadioProps, func } from './interface'

import './style/index.scss'

const noop = () => {}

const prefixCls = 'cp-ui-radio'

const defaultProps: RadioProps = {
  onChange: noop,
  checked: false,
  disabled: false,
  defaultChecked: false,
  autoFocus: false
}

const getClassNames = ({ checked, disabled, autoFocus, className }: RadioProps) => {
  return ClassNames(prefixCls, className, {
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-focus`]: autoFocus
  })
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: func) => {
  const checked = e.target.checked
  onChange(checked)
}
const Radio: React.SFC<RadioProps> & { defaultProps: Partial<RadioProps> } = props => {
  const propsCopy = { ...props }
  if ('checked' in props) {
    delete propsCopy.defaultChecked
  }
  const { children, onChange, ...rest } = propsCopy
  const classStr = getClassNames(props)
  return (
    <label className={classStr}>
      <span className={`${prefixCls}-select`}>
        <input
          type="radio"
          className={`${prefixCls}-input`}
          onChange={e => handleChange(e, onChange)}
          {...rest}
        />
        <span className={`${prefixCls}-select-inner`} />
      </span>
      <span className={`${prefixCls}-label`}>{children}</span>
    </label>
  )
}

Radio.defaultProps = defaultProps

export default Radio
