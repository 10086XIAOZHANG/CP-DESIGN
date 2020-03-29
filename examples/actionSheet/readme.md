# ActionSheet 动作面板

动作面板的展示

## 引入组件

```jsx
import * as React from 'react'
import { ActionSheet, Button, Badge, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
export default function ActionSheetDemo() {
  const showActionSheet = () => {
    ActionSheet.showActionSheetWithOptions({
      actions: [
        {
          key: '1',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '2',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '3',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '4',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        }
      ]
    })
  }
  const onClickNoCloseModal = () => {
    ActionSheet.showActionSheetWithOptions({
      cancelText: '关闭',
      closeOnClickModal: false,
      actions: [
        {
          key: '1',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '2',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '3',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '4',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        }
      ],
      onCancel: () => {}
    })
  }
  const showActionSheetBadge = () => {
    ActionSheet.showActionSheetWithOptions({
      actions: [
        {
          key: '1',
          content: (
            <div>
              <span>Operation1</span> <Badge text={'券1'} overflowCount={121}></Badge>
            </div>
          ),
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '2',
          content: (
            <div>
              <span>Operation1</span> <Badge text={100} overflowCount={99}></Badge>
            </div>
          ),
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '3',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '4',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        }
      ],
      onCancel: () => {}
    })
  }
  return (
    <div>
      <h1>ActionSheet 动作面板</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={showActionSheet}>showActionSheet</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={onClickNoCloseModal}>onClickNoCloseModal</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={showActionSheetBadge}>showActionSheetBadge</Button>
        </Col>
      </Row>
    </div>
  )
}
```

## Api

| 属性              |             说明             |             类型              |          默认值 | 可选 |
| ----------------- | :--------------------------: | :---------------------------: | --------------: | :--: |
| cancelText        |        取消按钮的文字        |            string             | React.ReactNode |  --  | -- |
| onCancel          |      取消按钮点击的回调      | (e: React.MouseEvent) => void |              -- |  --  |
| closeOnClickModal | 是否点击 modal 关闭,默认关闭 |            boolean            |            true |  --  |
| actions           |          一系列动作          |    Array\<ActionsItemType>    |              -- |  --  |
| className         |           样式类名           |          fun():void           |              -- |  --  |

###### ActionsItemType

| 属性    |             说明             |                      类型                      |          默认值 | 可选 |
| ------- | :--------------------------: | :--------------------------------------------: | --------------: | :--: |
| key     | 确认唯一值 不传默认从 0 递增 |                     string                     |          string |  0   | -- |
| content |        每一个子项内容        |                     string                     | React.ReactNode |  --  | -- |
| onClick |    点击按钮的点击回调函数    | fun(key: string, item: ActionsItemType) : void |              -- |  --  |
