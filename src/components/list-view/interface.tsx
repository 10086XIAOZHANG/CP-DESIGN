export interface ListViewProps {
  pullDownRefresh?: () => void
  pullUpLoad?: () => Promise<any>
  noMore: boolean
  noMoreTip: string
}
