import * as React from 'react'
import { ImagePicker, Icon, Row, Col } from '../../src/components'
import { OperationType, FileItemProps } from '../../src/components/image-picker/interface'
const { useState } = React

export default function ImagePickerDemo() {
  const [files, setFiles] = useState<Array<{}>>([])
  const [previewFile, setPreviewFile] = useState<FileItemProps>({})
  const [isShowPreviewFile, setIsShowPreviewFile] = useState(false)
  const [multifiles, setMultiFiles] = useState<Array<{}>>([])
  const handleChange = (files: Array<{}>) => {
    console.log(files)
    setFiles(files)
  }
  const handleMultiChange = (files: Array<FileItemProps>, operation: OperationType) => {
    console.log(files, operation)
    setMultiFiles([...files])
  }
  const onPreview = (file: FileItemProps) => {
    setPreviewFile(file)
    setIsShowPreviewFile(true)
  }
  return (
    <div>
      <h1>ImagePicker 图片选择器</h1>
      <h3>基本</h3>
      {isShowPreviewFile && (
        <div
          style={{
            position: 'fixed',
            zIndex: 99,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{ position: 'absolute', top: '5%', right: '3%' }}
            onClick={() => {
              setIsShowPreviewFile(false)
            }}
          >
            <Icon type={'close'} size={18} color={'#fff'} />
          </div>
          <img src={previewFile.url} style={{ height: '50%', width: '50%' }} />
        </div>
      )}
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <ImagePicker fileList={files} onChange={handleChange} preview onPreview={onPreview} />
        </Col>
      </Row>
      <h3>多选</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <ImagePicker multiple fileList={multifiles} onChange={handleMultiChange} preview />
        </Col>
      </Row>
      <h3>禁用</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <ImagePicker disabled fileList={multifiles} onChange={handleMultiChange} preview />
        </Col>
      </Row>
    </div>
  )
}
