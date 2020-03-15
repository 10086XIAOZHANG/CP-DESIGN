import * as React from 'react'

export type ShapeTypes = 'filled' | 'toast' | 'border'

export type SizeTypes = 'normal' | 'large' | 'small'

export interface MessageProps {
  // className
  className?: string
  // duration 延迟时间 默认3000
  duration: number
  // icon左边的图片
  icon?: React.ReactNode
  // children
  children?: React.ReactNode
  // onClose 关闭的时候触发的函数
  onClose: () => void
  // onClick 点击弹出区域触发的函数
  onClick: () => void
  // shape 形状
  shape: ShapeTypes
  // size 尺寸大小
  size: SizeTypes
  // animation 是否开启动画 默认为true
  animation: boolean
  // transitionName 动画类名，可自行配置 默认为`fade`
  animationName: string
  // prefixCls
  prefixCls: string
}

export interface InstanceProps {
  // 内容
  content?: React.ReactNode
  // icon左边的图片
  icon?: React.ReactNode
  // duration 延迟时间 默认3000
  duration: number
  // onClose 关闭的时候触发的函数
  onClose: () => void
  // onClick 点击弹出区域触发的函数
  onClick: () => void
  // shape 形状
  shape: ShapeTypes
  // size 尺寸大小
  size: SizeTypes
}
