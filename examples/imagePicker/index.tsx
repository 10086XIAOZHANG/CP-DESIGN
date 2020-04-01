import * as React from 'react'
import { ImagePicker, Row, Col } from '../../src/components'
import { OperationType, FileItemProps } from '../../src/components/image-picker/interface'
const { useState } = React

export default function ImagePickerDemo() {
  const [files, setFiles] = useState<Array<{}>>([])
  const [multifiles, setMultiFiles] = useState<Array<{}>>([])
  const handleChange = (files: Array<{}>) => {
    console.log(files)
    setFiles(files)
  }
  const handleMultiChange = (files: Array<FileItemProps>, operation: OperationType) => {
    console.log(files, operation)
    setMultiFiles([...files])
  }
  return (
    <div>
      <h1>ImagePicker 图片选择器</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <ImagePicker fileList={files} disableDelete onChange={handleChange} preview />
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
