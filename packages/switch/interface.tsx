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
  //platform  设定组件的平台特有样式, 可选值为 android, ios， 默认为 ios
  platform: 'ios' | 'android'
}
