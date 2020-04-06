# SwipeAction 滑动操作

滑动操作的展示

## 引入组件

```jsx
import * as React from 'react'
import { SwipeAction, NoticeBar, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
export default function SwipeActionDemo() {
  return (
    <div>
      <h1>SwipeAction 滑动操作</h1>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
            该组件只支持Touch事件，请使用移动模式/设备打开此页.
          </NoticeBar>
        </Col>
      </Row>
      <h3>基本</h3>
      <SwipeAction
        onOpen={() => {
          console.log('打开时回调函数')
        }}
        onClose={() => {
          console.log('关闭时回调函数')
        }}
        right={[
          {
            text: 'Delete',
            onPress: () => console.log('delete'),
            style: { backgroundColor: '#F4333C', color: 'white' }
          },
          {
            text: 'Cancel',
            onPress: () => console.log('cancel'),
            style: { backgroundColor: '#ddd', color: 'white' }
          }
        ]}
      >
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24}>
            <div
              style={{
                position: 'relative',
                background: '#fff',
                boxShadow: '0 5px 10px 0 rgba(51,51,51,.1)',
                padding: '6px',
                paddingLeft: '16px'
              }}
            >
              <h3 style={{ fontSize: '16px' }}>
                <i
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    borderRadius: '50%',
                    width: '8px',
                    height: '8px',
                    background: '#EB4735',
                    marginRight: '4px'
                  }}
                ></i>
                <span>今日公告</span>
              </h3>
              <div style={{ color: '#999', fontSize: 12 }}>
                <p
                  style={{
                    width: '85%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  因受网络影响，今日服务器出现不稳定事因受网络影响，今日服务器出现不稳定事
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </SwipeAction>
      <h3>禁用 swipeout</h3>
      <SwipeAction
        disabled
        onOpen={() => {
          console.log('打开时回调函数')
        }}
        onClose={() => {
          console.log('关闭时回调函数')
        }}
        right={[
          {
            text: 'Delete',
            onPress: () => console.log('delete'),
            style: { backgroundColor: '#F4333C', color: 'white' }
          },
          {
            text: 'Cancel',
            onPress: () => console.log('cancel'),
            style: { backgroundColor: '#ddd', color: 'white' }
          }
        ]}
      >
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24}>
            <div
              style={{
                position: 'relative',
                background: '#fff',
                boxShadow: '0 5px 10px 0 rgba(51,51,51,.1)',
                padding: '6px',
                paddingLeft: '16px'
              }}
            >
              <h3 style={{ fontSize: '16px' }}>
                <i
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    borderRadius: '50%',
                    width: '8px',
                    height: '8px',
                    background: '#EB4735',
                    marginRight: '4px'
                  }}
                ></i>
                <span>今日公告</span>
              </h3>
              <div style={{ color: '#999', fontSize: 12 }}>
                <p
                  style={{
                    width: '85%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  因受网络影响，今日服务器出现不稳定事因受网络影响，今日服务器出现不稳定事
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </SwipeAction>
    </div>
  )
}
```

## Api

| 属性      |           说明            |       类型       | 默认值 | 可选 |
| --------- | :-----------------------: | :--------------: | -----: | :--: |
| right     |        右侧按钮组         | Array\<BtnProps> |     -- |  --  |
| autoClose |  点击按钮后自动隐藏按钮   |     Boolean      |     -- |  --  |
| disabled  |         设置禁用          |     boolean      |     -- |  --  |
| prefixCls | class 前缀 默认 cp-ui-btn |      string      |     -- |  --  |
| className |         样式类名          |    fun():void    |     -- |  --  |
| onOpen    |      打开时回调函数       |   fun() : void   |     -- |  --  |
| onClose   |      关闭时回调函数       |   fun() : void   |     -- |  --  |
| style     |        自定义样式         |      Object      |     -- |  --  |

###### BtnProps

| 属性      |     说明     |     类型     | 默认值 | 可选 |
| --------- | :----------: | :----------: | -----: | :--: |
| text      |   按钮文案   |    String    |     -- |  --  |
| className |   样式类名   |  fun():void  |     -- |  --  |
| onPress   | 按钮点击事件 | fun() : void |     -- |  --  |
| style     |  自定义样式  |    Object    |     -- |  --  |
