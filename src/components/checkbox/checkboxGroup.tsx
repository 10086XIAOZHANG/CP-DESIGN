import * as React from 'react'
// import ClassNames from 'classnames'
import { CheckGroupProps, CheckboxProps } from './interface'
import Checkbox from './checkbox'

const noop = () => {}

const prefixCls = 'cp-ui-checkbox'

const defaultProps: CheckGroupProps = {
  onChange: noop,
  defaultValue: [],
  disabled: false,
  options: [],
  value: []
}

const getNewValue = (value: string[], defaultValue: string[], props: CheckGroupProps) => {
  if ('value' in props) {
    return value
  } else {
    return defaultValue
  }
}

const handleChange = ({ newValue, value, checked, onChange }: any) => {
  const newValueCopy = newValue.slice()
  if (checked) {
    newValueCopy.push(value)
  } else {
    newValueCopy.splice(newValue.indexOf(value), 1)
  }
  onChange(newValueCopy)
}

const renderOptions = (props: CheckGroupProps) => {
  const { value, defaultValue, options, onChange } = props
  const newValue = getNewValue(value, defaultValue, props)
  if (options && options.length > 0) {
    return (
      <React.Fragment>
        {options.map((option, index) => {
          const value = option.value
          return (
            <Checkbox
              checked={newValue.includes(value)}
              key={`checkbox-${index}`}
              onChange={checked => handleChange({ newValue, value, checked, onChange })}
            >
              {option.label}
            </Checkbox>
          )
        })}
      </React.Fragment>
    )
  }
  return null
}

const CheckboxGroup: React.SFC<CheckGroupProps> & {
  defaultProps: Partial<CheckGroupProps>
  checkbox: React.SFC<CheckboxProps> & { defaultProps: Partial<CheckboxProps> }
} = props => {
  return <div className={`${prefixCls}-group`}>{renderOptions(props)}</div>
}
CheckboxGroup.checkbox = Checkbox
CheckboxGroup.defaultProps = defaultProps

export default CheckboxGroup
