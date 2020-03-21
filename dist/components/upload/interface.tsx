export type OperationType = 'add' | 'remove'

export type UploadType = 'default' | 'card'

export interface UploadProps {
  // onChange
  onChange: (files: Array<{}>, operation: OperationType, index?: number) => void
  // files
  fileList: Array<{}>
  // 是否允许多张 默认为false
  multiple: boolean
  // maxLength 最大长度
  maxLength?: number
  // accept 接受上传的文件类型 默认为image/*
  accept: string
  // disabled 是否禁用 默认为false
  disabled: boolean
  // type 上传的两张方式，默认为经典款式
  type: UploadType
  // className
  className?: string
  // selectable 是否显示可添加按钮 默认为true
  selectable: boolean
  // 选择失败触发的回调
  onFail: (reason?: string) => void
  // preview 是否开启预览 默认为false
  preview: boolean
  // onPreview 点击预览的回调 两个参数
  onPreview: (file: object, index?: number) => void
  // 删除时候的回调
  onRemove: (file: object, index?: number) => void
}
