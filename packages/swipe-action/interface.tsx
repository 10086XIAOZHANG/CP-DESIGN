export interface BtnProps {
  text: string
  onPress: () => void
  style?: React.CSSProperties
  className?: string
}
export interface SwipeActionProps {
  style?: React.CSSProperties
  className?: string
  prefixCls: string
  right: BtnProps[]
  autoClose: boolean
  onOpen?: () => void
  disabled?: boolean
  onClose?: () => void
}
