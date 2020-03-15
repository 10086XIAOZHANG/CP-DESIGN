import * as React from 'react'

export type Status = 'success' | 'default' | 'process' | 'warning' | 'error'

export interface BadgeProps {
  // count 展示的数字, 可以进行自定义
  count?: React.ReactNode
  // dot 不展示数字 只展示小红点 默认为`false`
  dot: boolean
  // overflowCount 封顶的数字 默认99, 超过的用99+表示
  overflowCount: number
  // status 状态点 这个值对dot生效
  status?: Status
  // prefixCls
  prefixCls: string
  // children
  children?: React.ReactNode
}
