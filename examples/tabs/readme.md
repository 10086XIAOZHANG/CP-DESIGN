<!-- prettier-ignore -->
# Tabs 标签页

标签页的展示

## 引入组件

```jsx
import * as React from 'react'
import { Tabs, Row, Col, Badge } from 'cp-design'
```

## Demo 代码

```jsx
const { useState } = React
export default function TabsDemo() {
  const [activeKey, setActiveKey] = useState('1')
  const [activeBottomKey, setActiveBottomKey] = useState('1')
  const [activeLeftKey, setActiveLeftKey] = useState('1')
  const handleChange = (key: string) => {
    setActiveKey(key)
  }
  const handleChange1 = (key: string) => {
    setActiveBottomKey(key)
  }

  const handleChange2 = (key: string) => {
    setActiveLeftKey(key)
  }
  const options1 = [
    {
      key: '1',
      tab: 'Tab 1',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of first tab
        </div>
      )
    },
    {
      key: '2',
      tab: 'Tab 2',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of second tab
        </div>
      )
    },
    {
      key: '3',
      tab: 'Tab 3',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of third tab
        </div>
      )
    }
  ]
  const options = [
    {
      key: '1',
      tab: (
        <Badge text={3} status="success">
          <span style={{ paddingRight: '10px' }}>First Tab</span>
        </Badge>
      ),
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of first tab
        </div>
      )
    },
    {
      key: '2',
      tab: 'Second Tab',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of second tab
        </div>
      )
    },
    {
      key: '3',
      tab: 'Third Tab',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of third tab
        </div>
      )
    }
  ]

  return (
    <div>
      <h1>Tabs 标签页</h1>
      <h3>基本用法</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tabs activeKey={activeKey} onChange={handleChange} options={options} />
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tabs
            tabPosition={'bottom'}
            activeKey={activeBottomKey}
            onChange={handleChange1}
            options={options}
          />
        </Col>
      </Row>
      <h4>垂直样式</h4>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tabs
            tabPosition={'left'}
            activeKey={activeLeftKey}
            onChange={handleChange2}
            options={options1}
          />
        </Col>
      </Row>
    </div>
  )
}

//Tabs
```

## Api

| 属性               |                 说明                  |                    类型                     |   默认值 | 可选 |
| ------------------ | :-----------------------------------: | :-----------------------------------------: | -------: | :--: |
| activeKey          |        当前激活 tab 面板的 key        |                   string                    |       -- |  --  |
| type               |            'card', 'line'             |                   string                    |   'line' |  --  |
| onChange           |            切换 tab 的回调            |           (value: string) => void           |       -- |  --  |
| size               |              tabs 的大小              |         'small' , 'normal' ,'large'         | 'normal' |  --  |
| tabBarExtraContent |   tab bar 上额外的元素显示在最右边    |               React.ReactNode               |       -- |  --  |
| tabTitleStyle      |             tab bar 样式              |                   object                    |       -- |  --  |
| tabBarGutter       |            tabs 之间的间隙            |                   number                    |       -- |  --  |
| tabPosition        |          标签位置 默认为 top          |                   string                    |    ‘top’ |  --  |
| onExtraClick       | tab bar 上额外的元素显示在最右边 点击 | (e: React.MouseEvent\<HTMLElement>) => void |       -- |  --  |
| options            |           Array\<TabProps>            |                     --                      |       -- |  --  |

###### TabProps

| 属性    |           说明            |          类型           | 默认值 | 可选 |
| ------- | :-----------------------: | :---------------------: | -----: | :--: |
| key     | 每一个 key 对应 activeKey |         string          |     -- |  --  |
| tab     |         tab 标题          | string, React.ReactNode |     -- |  --  |
| content |      tab 对应的内容       | string, React.ReactNode |     -- |  --  |
