import * as React from 'react'
import { Omit } from '../utils/type'

type InputType = 'text' | 'number' | 'mobile' | 'bankCard' | 'password'
type OmitProps = 'type' | 'prefix' | 'onChange' | 'onBlur' | 'value' | 'defaultValue'

// 对omit的具体用法可以查看typescript的官网关于picker和exclude的用法，就是集合的概念
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, OmitProps> {
  // 当前值
  value?: string
  // 默认值
  defaultValue?: string
  //获取元素组件的ref
  getInputRef?: (ele: HTMLInputElement) => void
  // 类型
  type: InputType
  // prefix
  prefix?: React.ReactNode
  // 内嵌input前缀
  inlinePrefix?: React.ReactNode
  // 内嵌input前缀
  inlineSuffix?: React.ReactNode
  // suffix11
  suffix?: React.ReactNode
  // 错误提示
  error?: React.ReactNode
  // 是否禁用输入框
  disabled?: boolean
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
