import * as React from 'react'
import ClassNames from 'classnames'
import { SwitchProps } from './interface'

import './style/index.scss'

const noop = () => {}

const defaultProps: SwitchProps = {
  disabled: false,
  checked: false,
  onChange: noop,
  prefixCls: 'cp-ui-switch',
  color: '#ff5454'
}

const getClassName = ({ checked, disabled, prefixCls }: SwitchProps) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-disabled`]: disabled
  })
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>, { onChange }: SwitchProps) => {
  const checked = e.target.checked
  onChange(checked)
}

const Switch: React.SFC<SwitchProps> & { defaultProps: Partial<SwitchProps> } = props => {
  const { prefixCls, checked, color } = props
  const classStr = getClassName(props)
  let style: any = {}
  if (checked) {
    style.backgroundColor = color
  }
  return (
    <div className={classStr}>
      <div className={`${prefixCls}-checkbox`} style={style} />
      <input
        type="checkbox"
        checked={checked}
        onChange={e => handleChange(e, props)}
        className={`${prefixCls}-input`}
      />
    </div>
  )
}

Switch.defaultProps = defaultProps

export default Switch
