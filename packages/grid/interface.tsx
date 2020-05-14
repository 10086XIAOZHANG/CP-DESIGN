import * as React from 'react'

/**
 * 垂直对齐方式
 * top: 顶部对齐
 * middle: 居中对齐
 * bottom: 底部对齐
 * baseline: 按第一行文字基线对齐
 * stretch: 未设置高度或设为 auto，将占满整个容器的高度
 */
type alignType = 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'

/**
 * 水平对齐方式
 * start: 左对齐
 * end: 右对齐
 * center: 居中对齐
 * space-around: 每列具有相同的左右间距，行两端间距是列间距的二分之一
 * space-between: 两端对齐，列之间间距相等
 */
type justifyType = 'start' | 'end' | 'center' | 'space-around' | 'space-between'

/**
 * 子元素的换行方式，可选nowrap,wrap,wrap-reverse
 */
type wrapType = 'nowrap' | 'wrap' | 'wrap-reverse'

/**
 * 栅格占位
 */
type spanTypeNumber =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24

// 布局为flex布局
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  // 垂直对齐方式
  align: alignType
  // 列间隔, 支持响应式，可参考bootstrap的响应式{xs: 16, md: 24, lg: 32}
  gutter: number | object
  // 水平对齐方式
  justify: justifyType
  // 子元素的换行方式
  wrap?: wrapType
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  // 栅格左侧的间隔格数，间隔内不可以有栅格 默认为0
  offset: number
  // 列宽度，栅格占位数
  span?: spanTypeNumber
}
