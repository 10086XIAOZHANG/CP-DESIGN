import * as React from 'react'
import { Icon, Row, Col } from '../../src/components'
// import { action } from '@storybook/addon-actions'
export default function ButtonDemo() {
  const list = [
    'caret-square-o-down',
    'circle-o-notch',
    'cog',
    'align-right',
    'pencil',
    'cog',
    'lign-left',
    'align-center',
    'spinner fa-pulse',
    'home',
    'angle-down',
    'long-arrow-up'
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
      <h3>大小</h3>
      <Row style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <Col span={8}>
          <Icon type={'camera-retro'} size={8} />
        </Col>
        <Col span={8}>
          <Icon type={'camera-retro'} size={16} />
        </Col>
        <Col span={8}>
          <Icon type={'camera-retro'} size={24} />
        </Col>
        <Col span={8}>
          <Icon type={'camera-retro'} size={32} />
        </Col>
      </Row>
      <h3>颜色</h3>
      <Row style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <Col span={8}>
          <Icon type={'camera-retro'} color="rgb(44, 167, 241)" />
        </Col>
        <Col span={8}>
          <Icon type={'camera-retro'} color="rgb(234, 32, 152)" />
        </Col>
        <Col span={8}>
          <Icon type={'camera-retro'} color="rgb(21, 239, 218)" />
        </Col>
        <Col span={8}>
          <Icon type={'camera-retro'} color="rgb(95, 25, 220)" />
        </Col>
      </Row>
    </div>
  )
}
