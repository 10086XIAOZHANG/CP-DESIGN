import * as React from 'react'
import { Accordion, Row, Col, Icon } from '../../src/components'
// import { action } from '@storybook/addon-actions'
export default function AccordionDemo() {
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
      <h1>Accordion 手风琴</h1>
      <h3>基本模式</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Accordion
            style={{ background: 'none' }}
            activeKey={['1', '2']}
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
            activeKey={['0']}
            accordion
            dataSource={datas}
            onChange={onChange}
          ></Accordion>
        </Col>
      </Row>
    </div>
  )
}
