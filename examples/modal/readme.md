# Modal 对话框

对话框的展示

## 引入组件

```jsx
import * as React from 'react'
import { Modal, Button, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
const { useState } = React
export default function ModalDemo() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const showModal1 = (e: React.MouseEvent) => {
    e.preventDefault()
    setModal1(true)
  }
  const showModal2 = (e: React.MouseEvent) => {
    e.preventDefault()
    setModal2(true)
  }
  return (
    <div>
      <Modal
        visible={modal1}
        title="Title1"
        closable={false}
        cancelText={null}
        onOk={() => {
          setModal1(false)
        }}
      >
        <div style={{ height: 100, overflowY: 'scroll' }}>
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
        </div>
      </Modal>
      <Modal
        visible={modal2}
        title="Title2"
        closable={false}
        onCancel={() => {
          setModal2(false)
        }}
        onOk={() => {
          alert('afterOK')
          setModal2(false)
        }}
      >
        <div style={{ height: 100, overflowY: 'scroll' }}>
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
        </div>
      </Modal>
      <h1>Modal 对话框</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={showModal1}>basic</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={showModal2}>confirm</Button>
        </Col>
      </Row>
    </div>
  )
}
```

## Api

| 属性              |            说明             |          类型          | 默认值 | 可选 |
| ----------------- | :-------------------------: | :--------------------: | -----: | :--: |
| cancelText        |       取消按钮自定义        | React.ReactNode,string |     -- |  --  |
| okText            |       确定按钮自定义        | React.ReactNode,string |  large |  --  |
| visible           |          是否可见           |        boolean         |     -- |  --  |
| title             |       Modal 弹窗标题        |  string/React.Element  |     -- |  --  |
| children          |    Modal 自定义内容区域     |  string/React.Element  |     -- |  --  |
| prefixCls         | class 前缀 默认 cp-ui-modal |         string         |     -- |  --  |
| className         |          样式类名           |       fun():void       |     -- |  --  |
| maskClassName     |       弹出层样式类名        |       fun():void       |     -- |  --  |
| onOk              |      点击确定回调函数       |      fun() : void      |     -- |  --  |
| onCancel          |      点击取消回调函数       |      fun() : void      |     -- |  --  |
| style             |         自定义样式          |         Object         |     -- |  --  |
| maskClosable      |    点击浮层是否允许关闭     |        boolean         |   true |  --  |
| closable          |   是否显示右上角关闭图标    |        boolean         |   true |  --  |
| closeIcon         |    自定义右上角关闭图标     |    React.ReactNode     |     -- |  --  |
| destroy           |  是否销毁(关闭后自动销毁)   |        boolean         |   true |  --  |
| maskAnimationName |       弹出层动画类名        |         string         |   fade |  --  |
