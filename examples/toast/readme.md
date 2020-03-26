# Toast 提示

提示的展示

## 引入组件

```jsx
import * as React from 'react'
import { Button, Toast, Icon, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
export default function ToastDemo() {
  const showToast = () => {
    Toast.info('This is a toast tips !!!', 3)
  }
  const showToastNoMask = () => {
    Toast.info('Toast without mask !!!', 2, undefined, false)
  }
  const customIcon = () => {
    return <Icon type="circle-o-notch" spin size={'3rem'} />
  }
  const successToast = () => {
    Toast.success('Load success !!!', 1)
  }
  const failToast = () => {
    Toast.fail('Load failed !!!', 1)
  }
  const offline = () => {
    Toast.offline('Network connection failed !!!', 1)
  }
  const loadingToast = () => {
    Toast.loading('Loading...', 1, () => {
      console.log('Load complete !!!')
    })
  }
  return (
    <div>
      <h1>Toast 轻提示</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={showToast}>text only</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={showToastNoMask}>without mask</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={() => Toast.info(customIcon(), 1)}>cumstom icon</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={successToast}>success</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={failToast}>fail</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={offline}>network failure</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={loadingToast}>loading</Button>
        </Col>
      </Row>
    </div>
  )
}
```

## Api

- Toast.success(content, duration, onClose, mask)

- Toast.fail(content, duration, onClose, mask)

- Toast.info(content, duration, onClose, mask)

- Toast.loading(content, duration, onClose, mask)

- Toast.offline(content, duration, onClose, mask)

| 属性     |              说明              |          类型           |  默认值 | 可选 |
| -------- | :----------------------------: | :---------------------: | ------: | :--: |
| content  |            提示内容            | React.Element or String |      -- |  --  |
| duration |     自动关闭的延时，单位秒     |         number          |       3 |  --  |
| onClose  |           关闭后回调           |        Function         |      -- |  --  |
| mask     | 是否显示透明蒙层，防止触摸穿透 |  string/React.Element   | Boolean | true |

###### 注： duration = 0 时，onClose 无效，toast 不会消失；隐藏 toast 需要手动调用 hide

#### 还提供了全局配置和全局销毁方法：

- Toast.config({ duration, mask })

- Toast.hide()
