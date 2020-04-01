import * as React from 'react'
import ClassNames from 'classnames'
import * as warning from 'warning'
import { ImagePickerProps, FileItemProps } from './interface'
import Icon from '../icon'
import './style/index.scss'

const { useRef } = React

const noop = () => {}

const defaultProps: ImagePickerProps = {
  selectable: true,
  fileList: [],
  onChange: noop,
  multiple: false,
  accept: 'image/*',
  disabled: false,
  preview: false,
  disableDelete: false,
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

const getClassNames = ({ className, disabled }: ImagePickerProps) => {
  return ClassNames(prefixCls, className, `${prefixCls}-card`, {
    [`${prefixCls}-disabled`]: disabled
  })
}

const getRemainFilesLength = (
  targetFiles: { length: number },
  { fileList, maxLength: max }: ImagePickerProps
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

const handleChange = (event: React.ChangeEvent<HTMLInputElement>, props: ImagePickerProps) => {
  const { onChange, onFail, fileList } = props
  const newFiles: FileItemProps[] = fileList.slice()
  const promistFiles: Promise<FileItemProps>[] = []
  const targetFiles = event.target.files
  if (targetFiles) {
    const remainLength = getRemainFilesLength(targetFiles, props)
    const length = remainLength === -1 ? targetFiles.length : remainLength
    for (let i = 0; i < length; i++) {
      const parseFiles = parseFile(targetFiles[i], i)
      promistFiles.push(parseFiles as Promise<FileItemProps>)
    }
    Promise.all([...newFiles, ...promistFiles])
      .then(imageItems => onChange(imageItems, 'add'))
      .catch(error => {
        onFail(error)
      })
  }
}

const parseFile = (file: File, index: number) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = e => {
      const dataURL = (e.target as any).result
      if (!dataURL) {
        reject(`Fail to get the ${index} image`)
        return
      }

      let orientation = 1
      getOrientation(file, res => {
        // -2: not jpeg , -1: not defined
        if (res > 0) {
          orientation = res
        }
        resolve({
          url: dataURL,
          index,
          orientation,
          file
        })
      })
    }
    reader.readAsDataURL(file)
  })
}
/**
 * 获取原始文件
 * @param file
 * @param callback
 */
const getOrientation = (file: any, callback: (_: number) => void) => {
  const reader = new FileReader()
  reader.onload = e => {
    const view = new DataView((e.target as any).result)
    if (view.getUint16(0, false) !== 0xffd8) {
      return callback(-2)
    }
    const length = view.byteLength
    let offset = 2
    while (offset < length) {
      const marker = view.getUint16(offset, false)
      offset += 2
      if (marker === 0xffe1) {
        const tmp = view.getUint32((offset += 2), false)
        if (tmp !== 0x45786966) {
          return callback(-1)
        }
        const little = view.getUint16((offset += 6), false) === 0x4949
        offset += view.getUint32(offset + 4, little)
        const tags = view.getUint16(offset, little)
        offset += 2
        for (let i = 0; i < tags; i++) {
          if (view.getUint16(offset + i * 12, little) === 0x0112) {
            return callback(view.getUint16(offset + i * 12 + 8, little))
          }
        }
      } else if ((marker & 0xff00) !== 0xff00) {
        break
      } else {
        offset += view.getUint16(offset, false)
      }
    }
    return callback(-1)
  }
  reader.readAsArrayBuffer(file.slice(0, 64 * 1024))
}
const handleRemove = ({ fileList, onChange, onRemove }: ImagePickerProps, file: any) => {
  let newFiles = fileList.slice()
  newFiles = newFiles.filter(item => {
    return item.index !== file.index
  })
  onChange(newFiles, 'remove')
  onRemove(file)
}
const getRotation = (orientation = 1) => {
  let imgRotation = 0
  switch (orientation) {
    case 3:
      imgRotation = 180
      break
    case 6:
      imgRotation = 90
      break
    case 8:
      imgRotation = 270
      break
    default:
  }
  return imgRotation
}

const renderFiles = (props: ImagePickerProps) => {
  const {
    fileList,
    selectable,
    accept,
    multiple,
    preview,
    disableDelete,
    onPreview,
    disabled
  } = props
  const inputRef = useRef(null)
  const fileListCopy = fileList.slice()
  if (selectable) {
    fileListCopy.push({ _type: 'add' })
  }
  return fileListCopy.map((file: any, index) => {
    if (file._type === 'add') {
      return (
        <div className={`${prefixCls}-item ${prefixCls}-add`} key={`${Math.random()}-input`}>
          <div className={`${prefixCls}-add-image`} onClick={() => addImage(inputRef)}>
            <div className={`${prefixCls}-add-text`} />
          </div>

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
    const imgStyle = {
      transform: `rotate(${getRotation(file.orientation)}deg)`
    }
    return (
      <div className={`${prefixCls}-item ${prefixCls}-image`} key={file.url}>
        <div className={`${prefixCls}-item-info`}>
          <img src={file.url} style={imgStyle} />
        </div>
        <div className={`${prefixCls}-operation`}>
          {preview && (
            <span className={`${prefixCls}-preview`} onClick={() => onPreview(file, index)}>
              <Icon type="eye" />
            </span>
          )}
          {!disableDelete && (
            <span className={`${prefixCls}-remove`} onClick={() => handleRemove(props, file)}>
              <Icon type={`close`} size={16} />
            </span>
          )}
        </div>
      </div>
    )
  })
}

const ImagePicker: React.SFC<ImagePickerProps> & {
  defaultProps: Partial<ImagePickerProps>
} = props => {
  const classStr = getClassNames(props)
  return <div className={classStr}>{renderFiles(props)}</div>
}

ImagePicker.defaultProps = defaultProps

export default ImagePicker
