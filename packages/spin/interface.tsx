import * as React from 'react'

export type SizeType = 'small' | 'normal'

export interface SpinProps {
  // 自定义的指示符
  indicator?: React.ReactNode
  // 尺寸
  size: SizeType
  // spinning 是否在加载状态中 默认true
  spinning: boolean
  // tip 当有children的时候自定义文案
  tip?: string
  // 是否全屏展示 默认为false， 暂时没用等Modal
  fullScreen: boolean
  // children
  children?: React.ReactNode
  // color颜色 自定义loading的颜色，如果自定义了指示符，此属性无效
  color?: string
}
