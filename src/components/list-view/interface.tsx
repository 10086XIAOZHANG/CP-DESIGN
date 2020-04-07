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
export interface ListViewProps {
  pullDownRefresh?: () => void
  pullUpLoad?: () => Promise<any>
  noMore: boolean
  noMoreTip?: string
  children?: React.ReactElement
}
export interface ListViewHandlesProps {
  pullDownRefreshRenderData?: () => void
}
