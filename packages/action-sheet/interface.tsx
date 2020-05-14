export interface ActionsItemType {
  // 确认唯一值 不传默认从0递增
  key?: string
  content: string | React.ReactNode
  // action 点击
  onClick: ItemClickProps
}
export type noop = (e: React.MouseEvent) => void

export type ItemClickProps = (key: string, item: ActionsItemType) => void

export interface ActionSheetProps {
  // actions 数组
  actions: Array<ActionsItemType>
  // 取消action文案
  cancelText?: string | React.ReactNode
  // 取消按钮点击回调
  onCancel?: noop
  // 是否点击modal关闭
  closeOnClickModal?: boolean
}
