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
  onChange: (checked: boolean) => void
  // className
  className?: string
  // 单选框颜色
  color: string
}

export interface OptionTypes {
  label?: React.ReactNode
  value?: any
  disabled?: boolean
}

export type func = (value: any) => void
