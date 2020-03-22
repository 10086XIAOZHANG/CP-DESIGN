import * as React from 'react'
import { Divider, Row, Col } from '../../src/components'
// import { action } from '@storybook/addon-actions'
export default function ButtonDemo() {
  return (
    <div>
      <h1>Divider 分割线</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <p>
            Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman,
            chief executive officer, and a co-founder of Apple Inc.
          </p>
          <Divider />
          <p>
            Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman,
            chief executive officer, and a co-founder of Apple Inc.
          </p>
          <Divider>With Text</Divider>
          <p>
            Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman,
            chief executive officer, and a co-founder of Apple Inc.
          </p>
          <Divider dashed />
          <p>
            Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman,
            chief executive officer, and a co-founder of Apple Inc.
          </p>
          <Divider orientation="left">Left Text</Divider>
          <p>
            Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman,
            chief executive officer, and a co-founder of Apple Inc.
          </p>
          <Divider orientation="right">Right Text</Divider>
          <p>
            Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman,
            chief executive officer, and a co-founder of Apple Inc.
          </p>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <p>
            Text
            <Divider type="vertical" />
            <a href="#">Link</a>
            <Divider type="vertical" />
            <a href="#">Link</a>
          </p>
        </Col>
      </Row>
    </div>
  )
}
