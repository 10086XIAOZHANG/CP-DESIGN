import * as React from 'react'

export interface Action {
  content?: React.ReactNode
  onClick?: () => void
}

export interface CardProps {
  // title 标题
  title?: React.ReactNode
  // extra 额外的部分
  extra?: React.ReactNode
  // style 自定义的样式
  style?: React.CSSProperties
  // className
  className?: string
  // actions 底部的操作
  actions: Array<Action>
  // prefixCls
  prefixCls: string
  // onExtraClick
  onExtraClick: () => void
}
