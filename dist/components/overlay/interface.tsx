import * as React from 'react'

export interface OverlayProps {
  // prefixCls
  prefixCls: string
  // 类名
  className?: string
  // 弹出层名字
  maskClassName?: string
  // animationName 区域动画 默认为fade
  animationName: string
  // 弹出层动画类名 默认为fade
  maskAnimationName: string
  // visible 是否可见 默认为false
  visible: boolean
  // header 是否显示头部
  header?: React.ReactNode
  // mask 是否显示浮层 默认不显示浮层
  mask: boolean
  // maskClosable 默认为false 点击浮层是否允许关闭
  maskClosable: boolean
  // children 内容区域
  children?: React.ReactNode
  // closable 是否显示叉号 默认为false
  closable: boolean
  // close 关闭的节点可以自行定义
  close?: React.ReactNode
  // footer
  footer?: React.ReactNode
  // autoFix 是否开启自适应 在超出边界的时候会自动调整方向 默认为false
  autoFix: boolean
  // 关闭的回调,点击浮层关闭或者关闭按钮关闭都会调用此函数
  onClose: () => void
  // destroy 是否销毁 默认为true 关闭后默认销毁
  destroy: boolean
  // style 样式
  style?: React.CSSProperties
  // zIndex 层级 默认999
  zIndex?: number
}

export type Trigger = 'click' | 'hover'
export type Direction =
  | 'top'
  | 'left'
  | 'bottom'
  | 'right'
  | 'leftBottom'
  | 'leftTop'
  | 'rightTop'
  | 'rightBottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
// 带有位置的一类
export interface PopupProps {
  // 触发方式
  trigger: Trigger
  // direction
  direction: Direction
  // className
  className?: string
  // style
  style?: React.CSSProperties
  // children
  children?: React.ReactNode
  // visible 是否显示, dropdown, tooltip,popover可以在此基础上封装 默认为false
  visible: boolean
}
