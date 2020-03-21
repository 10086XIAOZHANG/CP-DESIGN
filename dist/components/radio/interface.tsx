import * as React from 'react'

export interface RadioProps {
  // 自动获取焦点 默认false
  autoFocus: boolean
  // checked 指定当前是否选中	默认false
  checked: boolean
  // 默认 初始化为false
  defaultChecked: boolean
  // disabled 不可用状态 默认为false
  disabled: boolean
  // onChange
  onChange: () => void
  // className
  className?: string
}

export interface OptionTypes {
  label?: React.ReactNode
  value?: any
  disabled?: boolean
}

export type SizeTypes = 'small' | 'normal' | 'large'

export type ShapeTypes = 'default' | 'button'

export type func = (value: any) => void

export interface RadioGroupProps {
  // options
  options: Array<OptionTypes>
  // onChange
  onChange: func
  // size
  size: SizeTypes
  // value 当前选中的值
  value?: any
  //disabled 禁用所有
  disabled: boolean
  // className
  className?: string
  // 形状 默认为default
  shape: ShapeTypes
}
