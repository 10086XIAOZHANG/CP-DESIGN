export type Direction = 'vertical' | 'horizontal'
/**
 * 完全受控组件
 */
export interface SlideProps {
  // value 当前值 range为false时, 为number, true时为[number, number]
  value: number | number[]
  // onChange 发生变化时候的回调
  onChange: (value: number | number[]) => void
  // range 是否为双滑块模式 默认为false
  range: boolean
  // className
  className?: string
  // disabled 禁用状态 默认为false
  disabled: boolean
  // icon
  // marks 刻度 key为number 且在[min, max]之内
  marks?: object
  // min最小值 默认为0
  min: number
  // max 最大值 默认为100
  max: number
  // 方向
  direction: Direction
  // step 步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。默认为1
  step: number
  // tooltipVisible 值为true时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时。 默认为false
  tooltipVisible: boolean
}

/**
 * 主动暴露两个方法
 * blur()
 * focus()
 */
