export type SizeType = 'large' | 'normal' | 'small'
export type ShapeType = 'square' | 'circle'

export interface AvatarProps {
  // 尺寸大小 默认为normal
  size: SizeType | number
  // 形状 默认为circle
  shape: ShapeType
  // src 图片的地址
  src?: string
  style?: object
  // srcSet
  srcSet?: string
  // icon 可参考Icon组件
  icon?: string
  // alt 图片不显示的占位
  alt?: string
  children?: any
  // onError 图片加载失败的回调
  onError: () => void
  // onClick 点击头像
  onClick: () => void
}
