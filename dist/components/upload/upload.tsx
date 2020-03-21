import * as React from 'react'
import ClassNames from 'classnames'
import * as warning from 'warning'
import { UploadProps } from './interface'
import Icon from '../icon'
import Button from '../button'

import './style/index.scss'

const { useRef } = React

const noop = () => {}

const defaultProps: UploadProps = {
  type: 'default',
  selectable: true,
  fileList: [],
  onChange: noop,
  multiple: false,
  accept: 'image/*',
  disabled: false,
  preview: false,
  onFail: noop,
  onRemove: noop,
  onPreview: noop
}

const prefixCls = 'cp-ui-upload'

const getMaxLength = (max?: number) => {
  if (typeof max === 'undefined') return -1
  if (max < 0) {
    warning(false, 'if maxLength is negative, it will be translated by Math.abs(maxLength)')
  }
  return Math.abs(max)
}

const getClassNames = ({ className, disabled, type }: UploadProps) => {
  return ClassNames(prefixCls, className, {
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-${type}`]: !!type
  })
}

const isDefaultType = (type: string) => {
  if (type === 'default') return true
  return false
}

const getRemainFilesLength = (
  targetFiles: { length: number },
  { fileList, maxLength: max }: UploadProps
) => {
  const maxLength = getMaxLength(max)
  if (maxLength === -1) return -1
  const sumLength = fileList.length + targetFiles.length
  if (sumLength < maxLength) return -1
  return maxLength - fileList.length
}

const addImage = (inputRef: any) => {
  ;(inputRef.current as any).click()
}

const handleChange = (event: React.ChangeEvent<HTMLInputElement>, props: UploadProps) => {
  const { onChange, onFail, fileList } = props
  const newFiles = fileList.slice()
  const targetFiles = event.target.files
  if (targetFiles) {
    const remainLength = getRemainFilesLength(targetFiles, props)
    const length = remainLength === -1 ? targetFiles.length : remainLength
    for (let i = 0; i < length; i++) {
      const reader = new FileReader()
      reader.onload = function(e) {
        const dataURL = (e.target as any).result
        if (!dataURL) {
          onFail(`Fail to get the ${i} image`)
        }
        newFiles.push({ url: dataURL, file: targetFiles[i] })
        onChange(newFiles, 'add')
      }
      reader.readAsDataURL(targetFiles[i])
    }
  }
}

const handleRemove = ({ fileList, onChange, onRemove }: UploadProps, index: number, file: any) => {
  const newFiles = fileList.slice()
  newFiles.splice(index, 1)
  onChange(newFiles, 'remove', index)
  onRemove(file, index)
}

const renderFiles = (props: UploadProps) => {
  const { fileList, selectable, accept, multiple, preview, onPreview, disabled, type } = props
  const inputRef = useRef(null)
  const fileListCopy = fileList.slice()
  const isDefault = isDefaultType(type)
  if (selectable) {
    isDefault ? fileListCopy.unshift({ _type: 'add' }) : fileListCopy.push({ _type: 'add' })
  }
  return fileListCopy.map((file: any, index) => {
    if (file._type === 'add') {
      return (
        <div className={`${prefixCls}-item ${prefixCls}-add`} key={`${Math.random()}-input`}>
          {isDefault ? (
            <Button
              type="ghost"
              onClick={() => addImage(inputRef)}
              icon={<Icon type="upload" size={16} />}
            >
              Upload
            </Button>
          ) : (
            <div className={`${prefixCls}-add-image`} onClick={() => addImage(inputRef)}>
              <div className={`${prefixCls}-add-text`} />
            </div>
          )}
          <input
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={e => handleChange(e, props)}
            ref={inputRef}
            style={{ display: 'none' }}
          />
        </div>
      )
    }
    return (
      <div className={`${prefixCls}-item ${prefixCls}-image`}>
        <div className={`${prefixCls}-item-info`}>
          <img src={file.url} />
        </div>
        <div className={`${prefixCls}-operation`}>
          {preview && !isDefault ? (
            <span className={`${prefixCls}-preview`} onClick={() => onPreview(file, index)}>
              <Icon type="eye" />
            </span>
          ) : null}
          <span
            className={`${prefixCls}-remove`}
            onClick={() => handleRemove(props, isDefault ? index - 1 : index, file)}
          >
            <Icon type={`${isDefault ? 'close-circle-fill' : 'delete'}`} size={16} />
          </span>
        </div>
      </div>
    )
  })
}

const Upload: React.SFC<UploadProps> & { defaultProps: Partial<UploadProps> } = props => {
  const classStr = getClassNames(props)
  return <div className={classStr}>{renderFiles(props)}</div>
}

Upload.defaultProps = defaultProps

export default Upload
