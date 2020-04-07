import * as React from 'react'
import { ListView, Row, Col } from '../../src/components'
const { useState, useRef } = React
const timeout = (delay: number) => new Promise(resolve => setTimeout(resolve, delay))
export default function ListViewDemo() {
  const [list, setList] = useState<number[]>([])
  const [noMore, setNoMore] = useState(false)
  const pageIndexRef = useRef(1)
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
    let res = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (pageIndexRef.current > 4) res = [] // 模拟没有数据了

    const _list = pageIndexRef.current === 1 ? res : list.concat(res)
    setList(_list)
    console.log('pageIndexRef.current', pageIndexRef.current, res.length)
    setNoMore(res.length === 0)
  }
  return (
    <div>
      <h1>ListView 长列表</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24} style={{ position: 'relative', height: 'calc(100vh - 100px)' }}>
          <ListView pullDownRefresh={pullDownRefresh} pullUpLoad={pullUpLoad} noMore={noMore}>
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
