import * as React from 'react'
/**
 * tab
 */
export interface TabProps {
  // 每一个key 对应 activeKey,key必传
  key: string
  // tab的内容 标题
  tab?: string | React.ReactNode
  // tab对应的内容
  content?: React.ReactNode | string
}

export type TabsTypes = 'card' | 'line'

export type TabsSizeTypes = 'small' | 'normal' | 'large'

export type TabsPositionTypes = 'top' | 'bottom' | 'left' | 'right'

/**
 * Tabs 群组
 */
export interface TabsProps {
  // 当前激活 tab 面板的 key
  activeKey?: string
  // type 类型 默认为line
  type: TabsTypes
  // onChange 切换tab的回调
  onChange: (value: string) => void
  // size 大小 默认为normal
  size: TabsSizeTypes
  // tab bar 上额外的元素 可以显示在最右边
  tabBarExtraContent?: React.ReactNode
  // tabBarGutter tabs 之间的间隙
  tabBarGutter?: number
  //TabBar 样式
  tabTitleStyle?: React.CSSProperties
  // className
  className?: string
  // tabPosition 标签位置 默认为top
  tabPosition: TabsPositionTypes
  // 前缀
  prefixCls: string
  // options 将要渲染的源数据
  options: Array<TabProps>
  // onExtraClick
  onExtraClick: (e: React.MouseEvent<HTMLElement>) => void
  //样式
  style?: React.CSSProperties
}
