import * as React from 'react'

export type Status = 'success' | 'default' | 'process' | 'warning' | 'error'

export interface BadgeProps {
  // text 展示的数字, 可以进行自定义
  text?: React.ReactNode
  // 营销样式
  hot?: boolean
  // dot 不展示数字 只展示小红点 默认为`false`
  dot: boolean
  // overflowCount 封顶的数字 默认99, 超过的用99+表示
  overflowCount: number
  // status 状态点 这个值对dot生效
  status?: Status
  // prefixCls
  prefixCls: string
  // style
  style?: React.CSSProperties
  // 外围样式outstyle
  outStyle?: React.CSSProperties
  // children
  children?: React.ReactNode
  //置于角落
  corner: boolean
}
