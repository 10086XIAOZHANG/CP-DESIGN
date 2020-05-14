import * as React from 'react'

export type SizeType = 'small' | 'medium' | 'large'

export type Type = 'line' | 'circle'

export type StatusType = 'normal' | 'success' | 'error'

export interface ProgressProps {
  // 尺寸 默认为normal
  size: SizeType
  // type 类型 默认为line
  type: Type
  // percent 当前的进度 默认为 0
  percent: number
  // showInfo 是否显示进度条的数值, 默认为true
  showInfo: boolean
  // status 状态 错误的时候是红色
  status: StatusType
  // width 进度条的宽度
  width?: number
  // activeColor
  activeColor?: string
  // 圆形的时候的文本渲染函数
  textRender?: (percent: number) => React.ReactNode
  // 进度条的位置，fixed 将浮出固定在最顶层
  position: 'fixed' | 'normal'
  //是否显示未填充的轨道 默认是true
  unfilled: boolean
}
