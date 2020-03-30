export type SizeType = 'small' | 'normal' | 'large'

export type TagCheckedType = 'primary' | 'ticked'

export interface TagProps {
  // size类型
  size: SizeType
  // onClick
  onClick: () => void
  // closable 标签是否可以关闭 默认为false
  closable: boolean
  // color 标签颜色
  color?: string
  // className
  className?: string
  // onClose 点击关闭按钮的回调
  onClose: () => void
  // style
  style?: object

  // 标签是否选中 默认为false
  checked?: boolean
  // onChange 点击的回调
  onChange?: (checked: boolean) => void
  // disabled 标签是否禁用 默认为false
  disabled?: boolean
  // type 类型有两种选中类型
  type?: TagCheckedType
}

export interface TagCheckedProps {
  // 标签是否选中 默认为false
  checked: boolean
  // onChange 点击的回调
  onChange: (checked: boolean) => void
  // disabled 标签是否禁用 默认为false
  disabled: boolean
  // type 类型有两种选中类型
  type: TagCheckedType
}
