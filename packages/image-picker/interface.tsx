export type OperationType = 'add' | 'remove'
export interface FileItemProps {
  // 本地FileReader生成dataurl链接
  url?: string
  // 文件元素标识
  index?: number
  // 方向
  orientation?: number
  // 文件
  file?: File
  // 内置_type,默认为add图标
  _type?: string
}
export interface ImagePickerProps {
  // onChange
  onChange: (files: Array<FileItemProps>, operation: OperationType, index?: number) => void
  // files
  fileList: Array<FileItemProps>
  // 是否允许多张 默认为false
  multiple: boolean
  // maxLength 最大长度
  maxLength?: number
  // accept 接受上传的文件类型 默认为image/*
  accept: string
  // disabled 是否禁用 默认为false
  disabled: boolean
  // className
  className?: string
  // selectable 是否显示可添加按钮 默认为true
  selectable: boolean
  // 选择失败触发的回调
  onFail: (reason?: string) => void
  // preview 是否开启预览 默认为false
  preview: boolean
  // 是否隐藏删除按钮 默认为false
  disableDelete: boolean
  // onPreview 点击预览的回调 两个参数
  onPreview: (file: FileItemProps, index?: number) => void
  // 删除时候的回调
  onRemove: (file: FileItemProps, index?: number) => void
}
