import * as React from 'react'

export interface Data {
  // key 默认为数组下标从0开始
  key?: string
  title?: React.ReactNode
  content?: React.ReactNode
  icon?: React.ReactNode
  // 默认为false
  disabled?: boolean
  // 右边的打开状态下的图标
  rightOpenIcon?: React.ReactNode
  // 右边的关闭状态下的图标
  rightCloseIcon?: React.ReactNode
}

export interface PanelProps {
  // icon 展开的图标可以配置
  icon?: React.ReactNode
  // 右边的打开状态下的图标
  rightOpenIcon?: React.ReactNode
  // 右边的关闭状态下的图标
  rightCloseIcon?: React.ReactNode
  // title 标题
  title?: React.ReactNode
  // content 内容
  content?: React.ReactNode
  // disabled 不可选区域 默认为false
  disabled: boolean
  // 默认 expanded 是否展开
  defaultExpanded: boolean
  // prefixCls
  prefixCls: string
  // onChange
  onChange: (expanded: boolean) => void
}

export interface AccordionProps {
  className?: string
  style?: React.CSSProperties
  // border 是否有边框 默认为true
  border: boolean
  // 当前激活的key
  activeKey: string[]
  // accordion 手风琴模式，手风琴模式下只能展开一个 默认为false
  accordion: boolean
  // dataSource 渲染元素 包括title和content
  dataSource: Array<Data>
  // onChange 切换面板时候的回调, true表示展开，false表示缩回,key表示当前操作的对象,如果不在expandedKeys数组,说明是关闭操作
  onChange: (expandedKeys: string[], key: string) => void
}
