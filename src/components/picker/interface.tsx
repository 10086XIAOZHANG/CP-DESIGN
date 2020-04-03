export interface PickerColumnProps {
  options: string[]
  name: string
  value: string
  itemHeight: number
  columnHeight: number
  onChange: (name: string, value: string) => void
  onClick: (name: string, value: string) => void
}
export interface PickerPanelProps {
  //数据集合key对应数组集合
  optionGroups: object
  //value对象类型,key和数据集合中key相对应
  valueGroups: object
  //选中后的回调
  onChange: (name: string, value: string) => void
  //点击后的回调
  onClick: (name: string, value: string) => void
  //行高度
  itemHeight: number
  //弹层高度
  height: number
}
export interface PickerItemProps {
  value: string
  label: string
  children?: PickerItemProps[]
}
export interface PickerProps {
  data: object
  valueGroups: object
  onChange: (name: string, value: string) => void
  onVisibleChange?: (visible: boolean) => void
  okText: string | React.ReactElement
  dismissText: string | React.ReactElement
  onOk?: (value: object) => void
  onDismiss?: () => void
}
