import * as React from 'react'

export type StatusTypes = 'wait' | 'process' | 'finish' | 'error'

export interface StepProps {
  // step的标题
  title?: React.ReactNode
  // step的描述信息
  describe?: React.ReactNode
  // 前置的图标，可以放入任何
  icon?: React.ReactNode
  // status 状态
  status: StatusTypes
}

export type DirectionType = 'horizontal' | 'vertical'

export type SizeType = 'small' | 'normal'

export type labelPlacement = 'horizontal' | 'vertical'

export interface StepsProps {
  // 方向
  direction: DirectionType
  // current 当前值 默认为 0
  current: string | number
  // size 默认normal
  size: SizeType
  // className
  className?: string
  // labelPlacement 字的描述位置
  labelPlacement: labelPlacement
  // options
  options: Array<StepProps>
  // color 可自行设置step颜色
  color?: string
}
