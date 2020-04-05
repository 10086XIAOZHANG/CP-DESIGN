# NoticeBar 通告栏

通告栏的展示

## 引入组件

```jsx
import * as React from 'react'
import { NoticeBar, Icon, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
export default function NoticeBarDemo() {
  return (
    <div>
      <h1>NoticeBar 通告栏</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <NoticeBar marqueeProps={{ loop: false, style: { padding: '0 7.5px' } }}>
            Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed
            during National Day.
          </NoticeBar>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <NoticeBar mode="link" onClick={() => alert('1')}>
            Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed
            during National Day.
          </NoticeBar>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <NoticeBar mode="closable" action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}>
            Closable demo for actionText.
          </NoticeBar>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
            Customized icon.
          </NoticeBar>
        </Col>
      </Row>
    </div>
  )
}

//NoticeBar
```

## Api

| 属性         |                说明                |     类型      |                                               默认值 | 可选 |
| ------------ | :--------------------------------: | :-----------: | ---------------------------------------------------: | :--: |
| mode         |    提示类型，可选 closable,link    |    string     |                                                   '' |  --  |
| action       | 用于替换操作 icon 的文案(右边区域) | ReactElement  |                                                   -- |  --  |
| marqueeProps |            marquee 参数            |    Object     | {loop: false, leading: 500, trailing: 800, fps: 40 } |  --  |
| icon         |         在开始位置设置图标         | React.Element |                                                   -- |  --  |
| prefixCls    |     class 前缀 默认 cp-ui-btn      |    string     |                                                   -- |  --  |
| className    |              样式类名              |  fun():void   |                                                   -- |  --  |
| onClick      |   点击关闭或者操作区域的回调函数   | fun() : void  |                                                   -- |  --  |
| style        |             自定义样式             |    Object     |                                                   -- |  --  |

###### marquee 参数

marquee 参数，其中 loop 表示是否循环，leading 表示动画开启前停顿，trailing 表示 loop 为 true 时，动画间停顿，fps 表示动画帧率。
