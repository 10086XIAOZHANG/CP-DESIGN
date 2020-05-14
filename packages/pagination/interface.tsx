import * as React from 'react'

export type SizeProps = 'small' | 'medium' | 'large'

/**
 * 此组件完全受控
 */
export interface PaginationProps {
  // 当前页数 默认为1
  current: number
  // onChange
  onChange: (page: string | number) => void
  // pageSize 每页的条数 默认为10条
  pageSize: number
  // total 数据总数 默认为0
  total: number
  // size 默认为middle
  size: SizeProps
  // className 类名
  className?: string
  // pre 上一步 可以自定义
  preStep?: React.ReactNode
  // next 下一步 可以自定义
  nextStep?: React.ReactNode
  // 是否隐藏数值
  simple?: boolean
  // mode 形态，可选number,pointer
  mode?: 'number' | 'pointer'
}
