/**
 * switch
 */

export interface SwitchProps {
  // className
  className?: string
  // prefixCls
  prefixCls: string
  // color 可配置颜色
  color: string
  // checked 默认为false
  checked: boolean
  // onChange 变化时候的回调
  onChange: (checked: boolean) => void
  // size 尺寸 默认为normal
  size?: number
  // disabled 默认为false
  disabled: boolean
}
