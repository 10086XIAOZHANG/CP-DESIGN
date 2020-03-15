import * as React from 'react'

type buttonType = 'warning' | 'primary' | 'ghost'
type sizeType = 'large' | 'normal' | 'small'
export interface ButtonProps {
  // button的类型 默认primary
  type: buttonType
  // button的尺寸，默认normal
  size: sizeType
  // disabled 默认为false
  disabled: boolean
  // 按钮的loading态 默认为false
  loading: boolean
  // onClick
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  // 前缀
  prefixCls: string
  // 类名
  className?: string
  // style
  style?: object
  // icon
  icon?: React.ReactNode
  // htmlType 原生的type  比如submit这些
  htmlType?: string
  children?: React.ReactNode
}
