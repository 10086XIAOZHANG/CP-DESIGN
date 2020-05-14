export interface SegmentedControlProps extends SegmentedControlPropsType {
  prefixCls?: string
  className?: string
  style?: React.CSSProperties
}

export interface SegmentedControlPropsType {
  tintColor?: string
  disabled?: boolean
  selectedIndex: number
  values: string[]
  onChange?: (index: number, value: string) => void
  onValueChange?: (value: string) => void
}
