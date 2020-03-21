export interface AffixProps {
  // 	距离窗口顶部达到指定偏移量后触发
  offsetTop?: number
  // 距离窗口底部达到指定偏移量后触发
  offsetBottom?: number
  // container
  container?: () => HTMLElement
  // onChange 固定状态改变时候的回调函数
  onChange: (fixed: boolean) => void
  // useFix 是否使用定位，不使用的话将会用position: 'sticky',css 总是比js更快
  useSticky: boolean
  // prefixCls
  prefixCls: string
}
