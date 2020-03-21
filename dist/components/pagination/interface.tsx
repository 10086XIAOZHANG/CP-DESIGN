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
  // 是否显示可以改变 pageSize 默认为false
  showSizeChanger: boolean
  // showQuickJumper 是否可以快速跳转到某页 默认为false
  showQuickJumper: boolean
  // onShowSizeChange 每页条数发生变化的回调, current当前页数， size为每页条数
  onShowSizeChange: (current: number, size: number) => void
  // size 默认为middle
  size: SizeProps
  // className 类名
  className?: string
  // pre 上一步 可以自定义
  preStep?: React.ReactNode
  // next 下一步 可以自定义
  nextStep?: React.ReactNode
  // pageShowCount 一页显示几个 默认为5
  pageShowCount: number
}
