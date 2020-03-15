import * as React from 'react'

export interface Data {
  // key 不传默认为数组下表从0开始
  key?: string
  title?: React.ReactNode
  content?: React.ReactNode
  icon?: React.ReactNode
  // 默认为false
  disabled?: boolean
}

/**
 * 此组件完全受控
 */
export interface PanelProps {
  // icon 展开的图标可以配置
  icon?: React.ReactNode
  // title 标题
  title?: React.ReactNode
  // content 内容
  content?: React.ReactNode
  // disabled 不可选区域 默认为false
  disabled: boolean
  // expanded 是否展开
  expanded: boolean
  // prefixCls
  prefixCls: string
  // onChange
  onChange: (expanded: boolean) => void
}

export interface CollapseProps {
  // border 是否有边框 默认为true
  border: boolean
  // 当前激活的key
  activeKey: string[]
  // accordion 手风琴模式，手风琴模式下只能展开一个 默认为false
  accordion: boolean
  // dataSource 数据源 要求`title` 和 `content`用来渲染
  dataSource: Array<Data>
  // onChange 切换面板时候的回调, true表示展开，false表示缩回
  onChange: (expandedKeys: string[]) => void
}
