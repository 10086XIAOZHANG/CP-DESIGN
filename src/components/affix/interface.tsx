export interface AffixProps {
  // 距离顶部的定位
  offsetTop: number
  // container
  container?: () => HTMLElement
  // onChange 固定状态改变时候的回调函数
  onChange: (fixed: boolean) => void
  // useFix 是否使用定位，不使用的话将会用position: 'sticky',css 总是比js更快
  useSticky: boolean
  // prefixCls
  prefixCls: string
}
