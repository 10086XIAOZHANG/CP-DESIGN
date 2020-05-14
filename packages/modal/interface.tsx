export interface ModalProps {
  // prefixCls
  prefixCls: string
  // 类名
  className?: string
  // 弹出层名字
  maskClassName?: string
  // animationName 区域动画 默认为fade
  animationName?: string
  // 弹出层动画类名 默认为fade
  maskAnimationName?: string
  // visible 是否可见 默认为false
  visible: boolean
  // title
  title?: React.ReactNode
  // maskClosable 默认为true 点击浮层是否允许关闭
  maskClosable: boolean
  // children 内容区域
  children?: React.ReactNode
  // closable 是否显示叉号 默认为true
  closable: boolean
  // okText 确认文本 默认为确认
  okText: React.ReactNode
  // cancelText 取消文本 默认为取消
  cancelText: React.ReactNode
  // onOk 点击确定按钮的回调
  onOk: () => void
  // onCancel 点击遮罩层或右上角叉或取消按钮的回调
  onCancel: () => void
  // destroy 是否销毁 默认为true 关闭后默认销毁
  destroy: boolean
  // closeIcon 取消的Icon
  closeIcon?: React.ReactNode
  // footer
  footer?: React.ReactNode
}
