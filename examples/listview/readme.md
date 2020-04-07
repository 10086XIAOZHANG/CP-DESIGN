# ListView 长列表

长列表的展示

## 引入组件

```jsx
import * as React from 'react'
import { ListView, NoticeBar, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
import { ListViewHandlesProps } from '../../src/components/list-view/interface'
const { useState, useRef, useEffect } = React

const timeout = (delay: number) => new Promise(resolve => setTimeout(resolve, delay))
export default function ListViewDemo() {
  const [list, setList] = useState<number[]>([])
  const [noMore, setNoMore] = useState(false)
  const refreshRef = useRef<ListViewHandlesProps | null>(null)
  const pageIndexRef = useRef(1)
  useEffect(() => {
    refreshRef.current?.pullDownRefreshRenderData()
  }, [])
  const pullDownRefresh = async () => {
    pageIndexRef.current = 1
    await getData()
  }

  const pullUpLoad = async () => {
    pageIndexRef.current++
    await getData()
  }

  const getData = async () => {
    //模拟请求和数据
    await timeout(1000)
    let res = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (pageIndexRef.current > 4) res = [] // 模拟没有数据了

    const _list = pageIndexRef.current === 1 ? res : list.concat(res)
    setList(_list)
    console.log('pageIndexRef.current', pageIndexRef.current, res.length)
    setNoMore(res.length === 0)
  }
  return (
    <div>
      <h1>ListView 长列表</h1>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
            该组件只支持Touch事件，请使用移动模式/设备打开此页.
          </NoticeBar>
        </Col>
      </Row>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24} style={{ position: 'relative', height: 'calc(100vh - 100px)' }}>
          <ListView
            refreshRef={refreshRef}
            pullDownRefresh={pullDownRefresh}
            pullUpLoad={pullUpLoad}
            noMore={noMore}
          >
            <>
              {list.map((item: number, index: number) => (
                <div
                  style={{
                    padding: '0 20px',
                    listStyle: 'none',
                    lineHeight: '80px',
                    height: '80px'
                  }}
                  key={index}
                >
                  数据数据数据数据{item}
                </div>
              ))}
            </>
          </ListView>
        </Col>
      </Row>
    </div>
  )
}

//ListView
```

## Api

| 属性               |                                                        说明                                                         |             类型             |      默认值 | 可选 |
| ------------------ | :-----------------------------------------------------------------------------------------------------------------: | :--------------------------: | ----------: | :--: |
| pullDownRefresh    | 下拉刷新时的回调函数,需要返回一个 Promise 来获取刷新状态,resolve 刷新成功，reject 刷新失败,建议直接使用 async await |           Function           |        null |  --  |
| pullUpLoad         | 上拉加载时的回调函数,需要返回一个 Promise 来获取加载状态,resolve 加载成功，reject 加载失败,建议直接使用 async await |           Function           |        null |  --  |
| noMore             |                                            上拉加载时，是否还有更多数据                                             |           Boolean            |       false |  --  |
| noMoreTip          |                                          上拉加载时，没有更多数据的提示语                                           |  String/React.ReactElement   |          -- |  --  |
| prefixCls          |                                           class 前缀 默认 cp-ui-list-view                                           |            string            |          -- |  --  |
| className          |                                                      样式类名                                                       |            string            |          -- |  --  |
| listViewHandleRefs |                                可以调用 ListView 组件的下拉刷新方法,使用方式见(demo)                                | useRef\<ListViewHandlesProps | null>(null) |  --  | -- |
