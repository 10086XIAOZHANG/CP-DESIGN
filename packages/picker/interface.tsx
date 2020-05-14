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
  //数据集合key对应数组集合
  data: object
  //value对象类型,key和数据集合中key相对应
  valueGroups: object
  //选中后的回调
  onChange: (name: string, value: string) => void
  //当显隐状态变化时回调函数
  onVisibleChange?: (visible: boolean) => void
  //选中的文案
  okText: string | React.ReactElement
  //取消选中的文案
  dismissText: string | React.ReactElement
  //标题
  title: string | React.ReactElement
  //点击选中时执行的回调
  onOk?: (value: object) => void
  //点击取消时执行的回调
  onDismiss?: () => void
}
