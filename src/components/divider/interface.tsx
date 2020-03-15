import * as React from 'react'

export interface DivideProps {
  // 类名
  className?: string
  // dashed 是否为虚线 默认为false
  dashed: boolean
  // orientation 文字的位置 默认为center
  orientation: OrientationEnum
  // type 分割线的类型 默认为水平位置
  type: DivideTypeEnum
  children?: React.ReactNode
}

export type OrientationEnum = 'left' | 'right' | 'center'

export type DivideTypeEnum = 'horizontal' | 'vertical'
