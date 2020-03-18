# Grid 布局

布局的展示

## 引入组件

```jsx
import * as React from 'react'
import { Row, Col } from 'cp-ui-design'
```

## Demo 代码

```jsx
export default function GridDemo() {
  return (
    <div>
      <div>
        <div style={{ marginTop: 20 }}>
          <Row gutter={5}>
            <Col span={12}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={12}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 20 }}>
          <Row gutter={10}>
            <Col span={8}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={8}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={8}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 20 }}>
          <Row gutter={10}>
            <Col span={6}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={6}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={6}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={6}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <h3>Wrap</h3>
        <div style={{ marginTop: 20 }}>
          <Row wrap="wrap">
            <Col span={6} style={{ margin: '9px 9px 9px 0' }}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={6} style={{ margin: '9px 9px 9px 0' }}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={6} style={{ margin: '9px 9px 9px 0' }}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={6} style={{ margin: '9px 9px 9px 0' }}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={6} style={{ margin: '9px 9px 9px 0' }}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={6} style={{ margin: '9px 9px 9px 0' }}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <h3>Align</h3>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} justify="center">
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} justify="end">
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} justify="space-between">
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} justify="start">
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} justify="space-around">
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} justify="start">
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} align="top">
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} align="middle">
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} align="bottom">
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} align="baseline">
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} align="stretch">
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder" style={{ height: 20 }}>
                Block
              </div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
```

## Api

##### Row

| 属性      |                                                                  说明                                                                  |        类型         |   默认值 | 可选 |
| --------- | :------------------------------------------------------------------------------------------------------------------------------------: | :-----------------: | -------: | :--: |
| align     |                         子元素在交叉轴上的对齐方式，可选 'top' , 'middle' , 'bottom' , 'baseline' , 'stretch'                          |       String        |    `top` |  --  |
| justify   |                      子元素在主轴上的对齐方式，可选 'start' , 'end' , 'center' , 'space-around' , 'space-between'                      |       String        |  `start` |  --  |
| wrap      |                                            子元素的换行方式，可选 nowrap,wrap,wrap-reverse                                             |       String        | `nowrap` |  --  |
| gutter    | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]。 | number/object/array |        0 |  --  |
| style     |                                                               自定义样式                                                               |       Object        |       -- |  --  |
| className |                                                                样式类名                                                                |     fun():void      |       -- |  --  |

##### Col

| 属性      |                   说明                    |    类型    | 默认值 | 可选 |
| --------- | :---------------------------------------: | :--------: | -----: | :--: |
| span      | 栅格占位格数，为 0 时相当于 display: none |   number   |     -- |  --  |
| offset    |  栅格左侧的间隔格数，间隔内不可以有栅格   |   number   |      0 |  --  |
| style     |                自定义样式                 |   Object   |     -- |  --  |
| className |                 样式类名                  | fun():void |     -- |  --  |
