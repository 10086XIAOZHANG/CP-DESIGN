export interface PopoverPropsType {
  onSelect?: (node: any, index?: number) => void
  overlay: React.ReactNode
  disabled?: boolean
}
type PlacementProps =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
export interface PopOverPropsType extends PopoverPropsType {
  prefixCls: string
  placement: PlacementProps
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
  align?: {}
  mask?: boolean
}

export interface PopoverItemProps {
  className?: string
  prefixCls?: string
  icon?: React.ReactNode
  disabled?: boolean
  firstItem?: string
  activeStyle?: React.CSSProperties
  style?: React.CSSProperties
}
