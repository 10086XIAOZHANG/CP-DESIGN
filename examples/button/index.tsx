import * as React from 'react'
import { Button, Row, Col } from '../../src/components'
import { action } from '@storybook/addon-actions'
export default function ButtonDemo() {
  return (
    <div>
      <h1>Button 按钮</h1>
      <h3>类型、尺寸</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={action('clicked')}>default</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button disabled>default disabled</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button type="primary" onClick={action('clicked')}>
            primary
          </Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button type="primary" onClick={action('clicked')} disabled>
            primary disabled
          </Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={action('clicked')} type="warning">
            warning
          </Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={action('clicked')} type="warning" disabled>
            warning disabled
          </Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={action('clicked')} loading>
            loading button
          </Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button>with icon</Button>
        </Col>
      </Row>
    </div>
  )
}
