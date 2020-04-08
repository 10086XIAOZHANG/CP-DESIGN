# ImagePicker 图片选择器

图片选择器的展示

## 引入组件

```jsx
import * as React from 'react'
import { ImagePicker, Icon, Row, Col } from 'cp-design'
import { OperationType, FileItemProps } from '../../src/components/image-picker/interface'
```

## Demo 代码

```jsx
const { useState } = React

export default function ImagePickerDemo() {
  const [files, setFiles] = useState < Array < {} >> []
  const [previewFile, setPreviewFile] = useState < FileItemProps > {}
  const [isShowPreviewFile, setIsShowPreviewFile] = useState(false)
  const [multifiles, setMultiFiles] = useState < Array < {} >> []
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

//ImagePicker
```

## Api

| 属性          |                                说明                                |                               类型                               | 默认值 | 可选 |
| ------------- | :----------------------------------------------------------------: | :--------------------------------------------------------------: | -----: | :--: |
| onChange      | files 值发生变化触发的回调函数, operationType 操作类型有添加，移除 | (files: Array\<FileItemProps>, operation: OperationType) => void |     -- |  --  |
| fileList      |              FileItemProps 数组,里面包含图片相关信息               |                        FileItemProps 类型                        |     -- |  --  |
| multiple      |                            是否允许多张                            |                             boolean                              |  false |  --  |
| maxLength     |                       最多允许上传多少张图片                       |                              number                              |     -- |  --  |
| accept        |                         接受上传的文件类型                         |                             image/\*                             |     -- |  --  |
| className     |                              样式类名                              |                            fun():void                            |     -- |  --  |
| selectable    |                         是否显示可添加按钮                         |                             boolean                              |   true |  --  |
| style         |                             自定义样式                             |                              Object                              |     -- |  --  |
| disabled      |                              是否禁用                              |                             boolean                              |  false |  --  |
| onFail        |                         选择失败触发的回调                         |                    (reason?: string) => void                     |     -- |  --  |
| preview       |                            是否开启预览                            |                             boolean                              |  false |  --  |
| disableDelete |                            是否开启预览                            |                             boolean                              |  false |  --  |
| onPreview     |                      onPreview 点击预览的回调                      |          (file: FileItemProps, index?: number) => void           |     -- |  --  |
| onRemove      |                           删除时候的回调                           |          (file: FileItemProps, index?: number) => void           |     -- |  --  |

###### FileItemProps

| 属性        |               说明                |             类型              | 默认值 | 可选 |
| ----------- | :-------------------------------: | :---------------------------: | -----: | :--: |
| url         | 本地 FileReader 生成 dataurl 链接 | (files: Array\<FileItemProps> | string |  --  | -- |
| index       |           文件元素标识            |            number             |     -- |  --  |
| orientation |             图片方向              |            number             |      1 |  --  |
| \_type      |            内置\_type             |            string             |     -- |  --  |
