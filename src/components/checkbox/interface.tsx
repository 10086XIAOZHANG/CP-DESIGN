/**
 * checkbox interface
 */
export interface CheckboxProps {
  // 是否被选中 默认为false
  checked?: boolean
  // onChange 变化时候发生的回调
  onChange: (checked: boolean | number | string) => void
  // autofocus 默认聚焦状态
  autoFocus?: boolean
  // disabled 默认为false
  disabled?: boolean
  // className
  className?: string
  // 半选状态 默认为false
  indeterminate?: boolean
  // 默认选中 默认为false
  defaultChecked?: boolean
  // onBlur
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
  // onFocus
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void
  // prefixCls
  prefixCls?: string
  // onMouseEnter
  onMouseEnter?: React.MouseEventHandler<any>
  // onMouseLeave
  onMouseLeave?: React.MouseEventHandler<any>
  // onKeyPress
  onKeyPress?: React.KeyboardEventHandler<any>
  // onKeyDown
  onKeyDown?: React.KeyboardEventHandler<any>
  children?: React.ReactNode
}

interface OptionValue {
  label: string | number
  value: any
}

/**
 * checkboxGroup
 */
export interface CheckGroupProps {
  // onChange
  onChange: (checkedValue: any) => void
  // defaultValue 默认值
  defaultValue: string[]
  // disabled 失效 全部不可用 默认false
  disabled: boolean
  // 配置的选项
  options: Array<OptionValue>
  // value 指定选中 的项
  value: string[]
}
