# Accordion 手风琴

手风琴的展示

## 引入组件

```jsx
import * as React from 'react'
import { Accordion, Row, Col, Icon } from 'cp-design'
```

## Demo 代码

```jsx
export default function ButtonDemo() {
  const datas = Array.from({ length: 5 }, (item, index) => {
    console.log(item)
    return {
      key: `${index}`,
      title: `测试title${index}`,
      content: '测试内容',
      icon: <Icon type={'camera-retro'} />
    }
  })
  const onChange = (expandedKeys: string[]) => {
    console.log(expandedKeys)
  }
  return (
    <div>
      <h3>基本模式</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Accordion
            style={{ background: 'none' }}
            activeKey={['1']}
            dataSource={datas}
            onChange={onChange}
          ></Accordion>
        </Col>
      </Row>
      <h3>手风琴模式</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Accordion
            style={{ background: 'none' }}
            activeKey={['1']}
            accordion
            dataSource={datas}
            onChange={onChange}
          ></Accordion>
        </Col>
      </Row>
    </div>
  )
}
```

## Api

| 属性       |                 说明                 |                     类型                      | 默认值 | 可选 |
| ---------- | :----------------------------------: | :-------------------------------------------: | -----: | :--: |
| border     |              是否有边框              |                    boolean                    |   true |  --  |
| activeKey  |            默认激活的 key            |                   string[]                    |     -- |  --  |
| accordion  | 手风琴模式，手风琴模式下只能展开一个 |             string/React.Element              |  false |  --  |
| prefixCls  |   class 前缀 默认 cp-ui-accordion    |                    string                     |     -- |  --  |
| className  |               样式类名               |                    string                     |     -- |  --  |
| onChange   |            切换面板的回调            | (expandedKeys: string[], key: string) => void |     -- |  --  |
| style      |              自定义样式              |                    Object                     |     -- |  --  |
| dataSource |               渲染元素               |                 Array\<Data>                  |     -- |  --  |

###### Data

| 属性           |             说明             |      类型       | 默认值 | 可选 |
| -------------- | :--------------------------: | :-------------: | -----: | :--: |
| key            |        默认为数组下标        |       int       |      0 |  --  |
| title          |          面板头内容          | React.ReactNode |     -- |  --  |
| content        |           面板内容           | React.ReactNode |     -- |  --  |
| icon           |        面板头左边图标        |      Icon       |     -- |  --  |
| disabled       |           设置禁用           |     boolean     |  false |  --  |
| rightOpenIcon  | 面板头右边的展开状态下的图标 |      Icon       |     -- |  --  |
| rightCloseIcon | 面板头右边的关闭状态下的图标 |      Icon       |     -- |  --  |
