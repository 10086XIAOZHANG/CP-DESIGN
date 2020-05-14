export interface PullDownRefreshProps {
  setMove: React.Dispatch<React.SetStateAction<boolean>>
  setTranslateY: React.Dispatch<React.SetStateAction<number>>
  setPullDownStatus: React.Dispatch<React.SetStateAction<number>>
  listViewStatusRefs: React.MutableRefObject<{
    scrollTop: number
    touchX: number
    touchY: number
    time: number
    type: string
    pullDownDoneBacking: boolean
  }>
}
export interface RefreshContainer {
  text: string
  icon: string | React.ReactNode
}
export interface RefreshTips {
  loading?: RefreshContainer
  success?: RefreshContainer
  error?: RefreshContainer
  actionRelease?: string
  actionDown?: string
}
export interface UpLoadTips {
  loading: string | React.ReactNode
  success?: string | React.ReactNode
  error?: string | React.ReactNode
}
export interface ListViewProps {
  //下拉加载注册的方法
  pullDownRefresh?: () => void
  //上拉加载注册的方法
  pullUpLoad?: () => Promise<any>
  //下拉加载是否有数据
  noMore: boolean
  //下拉加载没有数据时的提示
  noMoreTip?: string | React.ReactElement
  //内容必须大于外层容器
  children?: React.ReactElement
  //外层容器调用listview的方法
  listViewHandleRefs?: React.MutableRefObject<ListViewHandlesProps | null>
  //类名
  className?: string
  //前缀
  prefixCls?: string
  //样式
  style?: React.CSSProperties
  //下拉刷新文案
  refreshTips?: RefreshTips
  //上拉加载文案
  upLoadTips?: UpLoadTips
}
export interface ListViewHandlesProps {
  //初始化可调用上拉加载
  pullDownRefreshRenderData: () => void
}
