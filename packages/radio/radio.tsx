import * as React from 'react'
import ClassNames from 'classnames'
import { RadioProps, func } from './interface'

import './style/index.scss'
import Icon from '../icon'
const noop = () => {}

const prefixCls = 'cp-ui-radio'

const defaultProps: RadioProps = {
  onChange: noop,
  checked: false,
  disabled: false,
  defaultChecked: false,
  autoFocus: false,
  color: '#ff5454'
}

const getClassNames = ({ checked, disabled, autoFocus, className }: RadioProps) => {
  return ClassNames(prefixCls, className, {
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-focus`]: autoFocus
  })
}

const handleChange = (onChange: func, radioChecked: boolean) => {
  onChange(radioChecked)
}
const renderIcon = (radioChecked: boolean, color: string, disabled: boolean) => {
  if (disabled) {
    return <Icon type={'circle-o'} size={'18px'} color={'#c2c2c2'} />
  }
  return <Icon type={!radioChecked ? 'circle-o' : 'check-circle'} size={'18px'} color={color} />
}
const Radio: React.FC<RadioProps> & { defaultProps: Partial<RadioProps> } = props => {
  const propsCopy = { ...props }
  const { children, onChange, color, ...rest } = propsCopy
  const isChecked =
    propsCopy.checked !== undefined ? propsCopy.checked : propsCopy.defaultChecked ?? false
  const classStr = getClassNames(props)
  return (
    <label className={classStr}>
      <span className={`${prefixCls}-select`}>
        <input
          type="radio"
          className={`${prefixCls}-input`}
          onClick={() => {
            handleChange(onChange, isChecked)
          }}
          {...rest}
        />
        {renderIcon(isChecked, color, propsCopy.disabled)}
      </span>
      <span className={`${prefixCls}-label`}>{children}</span>
    </label>
  )
}

Radio.defaultProps = defaultProps

export default Radio
