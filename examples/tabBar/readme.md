<!-- prettier-ignore -->
# TabBar 标签栏

标签栏的展示

## 引入组件

```jsx
import * as React from 'react'
import { TabBar, Row, Col, Icon, Button } from 'cp-design'
```

## Demo 代码

```jsx
const { useState } = React
export default function TabBarDemo() {
  const [isHidden, setIsHidden] = useState(false)
  const items = [
    {
      badge: 1,
      dot: true,
      selected: true,
      icon: <Icon type={'qq'} size={18} />,
      selectedIcon: <Icon type={'qq'} color="#ff5454" size={18} />,
      title: <span>Lift</span>,
      selectedTitle: <span style={{ color: '#ff5454' }}>Lift</span>,
      key: 'lift',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '0 20%',
            height: '100%',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          <h3 style={{ marginBottom: '12px' }}> TabBar 标签栏</h3>
          <Button
            onClick={() => {
              setIsHidden(true)
            }}
          >
            HIDDEN Bar
          </Button>
          <Button
            style={{ marginTop: '12px' }}
            onClick={() => {
              setIsHidden(false)
            }}
          >
            SHOW Bar
          </Button>
        </div>
      )
    },
    {
      badge: 1,
      dot: true,
      selected: true,
      icon: <Icon type={'slideshare'} size={18} />,
      selectedIcon: <Icon type={'slideshare'} color="#ff5454" size={18} />,
      title: <span>Koubei</span>,
      selectedTitle: <span style={{ color: '#ff5454' }}>Koubei</span>,
      key: 'koubei',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of second tab
        </div>
      )
    },
    {
      badge: 1,
      dot: true,
      selected: true,
      icon: <Icon type={'snapchat'} size={18} />,
      selectedIcon: <Icon type={'snapchat'} color="#ff5454" size={18} />,
      title: 'Friend',
      selectedTitle: <span style={{ color: '#ff5454' }}>Friend</span>,
      key: 'Friend',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of third tab
        </div>
      )
    },
    {
      badge: 1,
      dot: true,
      selected: true,
      icon: <Icon type={'stumbleupon-circle'} size={18} />,
      selectedIcon: <Icon type={'stumbleupon-circle'} color="#ff5454" size={18} />,
      title: 'My',
      selectedTitle: <span style={{ color: '#ff5454' }}>My</span>,
      key: 'My',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '1440px',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of four tab
        </div>
      )
    }
  ]
  const onPress = (key: string) => {
    console.log(key)
  }
  return (
    <div>
      <Row
        style={{
          marginBottom: '1rem',
          position: 'fixed',
          height: '100%',
          top: 0,
          left: 0
        }}
      >
        <Col span={24}>
          <TabBar items={items} hidden={isHidden} barTintColor={'#fff'} onPress={onPress} />
        </Col>
      </Row>
    </div>
  )
}
```

## Api

| 属性           |     说明      |          类型           |   默认值 | 可选 |
| -------------- | :-----------: | :---------------------: | -------: | :--: |
| barTintColor   | tabbar 背景色 |         String          |  "white" |  --  |
| hidden         |   是否隐藏    |         Boolean         |    false |  --  |
| prefixCls      |   样式前缀    |         String          |       -- |  --  |
| className      |  自定义类名   |         String          |       -- |  --  |
| tabBarPosition |  tabbar 位置  |         string          | 'bottom' |  --  |
| onPress        | bar 点击触发  |  (key: string) => void  |       -- |  --  |
| items          | 每一个 tabbar | Array\<TabBarItemProps> |       -- |  --  |

###### TabBarItemProps

| 属性         |                说明                |          类型           |  默认值 | 可选 |
| ------------ | :--------------------------------: | :---------------------: | ------: | :--: |
| badge        |               徽标数               |     number , string     |      -- |  --  |
| dot          |       是否在右上角显示小绿点       |         Boolean         |      -- |  --  |
| icon         |            默认展示图标            |     React.ReactNode     | 见 demo |  --  |
| selectedIcon |          选中后的展示图标          |     React.ReactNode     | 见 demo |  --  |
| title        |              标题文字              |     React.ReactNode     |  string |  --  | -- |
| selectedIcon |          选中后的展示图标          |     React.ReactNode     |  string |  --  | -- |
| key          | 每一个 key 对应 activeKey,唯一标识 |         string          |      -- |  --  |
| content      |           tab 对应的内容           | string, React.ReactNode |      -- |  --  |
