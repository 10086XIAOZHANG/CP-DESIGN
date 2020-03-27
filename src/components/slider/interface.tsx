interface SliderProps {
  // onChange 发生变化时候的回调
  onChange?: (value?: number) => void
  // 与 ontouchend 触发时机一致，把当前值作为参数传入。
  onAfterChange?: (value?: number) => void
  // 设置初始取值
  defaultValue?: number
  tipFormatter?: (value?: string) => React.ReactNode
  // 设置当前取值
  value?: number
  // 最小值 默认0
  min?: number
  // 最大值 默认0
  max?: number
  // 步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分
  step?: number
  //滑块为禁用状态,默认为false
  disabled?: boolean
  handle?: any
}
export interface SliderPropsType extends SliderProps {
  prefixCls?: string
  //刻度标记，key 的类型必须为 Number 且取值在闭区间 min, max 内
  marks?: { [key: number]: string }
  //是否只能拖拽到刻度上 默认false
  dots?: boolean
  included?: boolean
  maximumTrackStyle?: React.CSSProperties
  minimumTrackStyle?: React.CSSProperties
  handleStyle?: React.CSSProperties
  trackStyle?: React.CSSProperties
  railStyle?: React.CSSProperties
  style?: React.CSSProperties
}
