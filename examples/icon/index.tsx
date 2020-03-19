import * as React from 'react'
import { Icon, Row, Col } from '../../src/components'
// import { action } from '@storybook/addon-actions'
export default function ButtonDemo() {
  const list = [
    'check-circle',
    'check',
    'caret-up',
    'delete',
    'eye-close',
    'eye',
    'up',
    'down',
    'left',
    'right',
    'message-fill',
    'link'
  ]
  const data = list.map(item => ({
    icon: <Icon type={item} />,
    text: item
  }))
  return (
    <div>
      <h1>Icon 图标</h1>
      <h3>基本</h3>
      {data.map((item, index) => {
        if (index !== 0 && (index + 1) % 3 === 0) {
          return (
            <Row style={{ marginBottom: '1rem', textAlign: 'center' }} key={index}>
              <Col span={8}>
                {data[index - 2].icon}
                <p>{data[index - 2].text}</p>
              </Col>
              <Col span={8}>
                {data[index - 1].icon}
                <p>{data[index - 1].text}</p>
              </Col>
              <Col span={8}>
                {item.icon}
                <p>{data[index].text}</p>
              </Col>
            </Row>
          )
        }
        return null
      })}
    </div>
  )
}
