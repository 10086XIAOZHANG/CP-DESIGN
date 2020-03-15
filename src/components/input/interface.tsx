import * as React from 'react'
import { Omit } from '../utils/type'

type inputType = 'text' | 'number' | 'mobile' | 'bankCard' | 'password'
type omitProps = 'type' | 'prefix' | 'onChange' | 'onBlur' | 'value' | 'defaultValue'

// 对omit的具体用法可以查看typescript的官网关于picker和exclude的用法，就是集合的概念
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, omitProps> {
  // 当前值
  value?: string
  // 默认值
  defaultValue?: string
  // 类型
  type: inputType
  // prefix
  prefix?: React.ReactNode
  // suffix
  suffix?: React.ReactNode
  // clear 是否显示清除 默认为false
  clear: boolean
  // 前置点击
  addonBefore?: React.ReactNode
  // 后置点击
  addonAfter?: React.ReactNode
  // onChange
  onChange: (value: string) => void
  // onBlur
  onBlur: (value?: string, e?: React.FocusEvent<HTMLInputElement>) => void
}
