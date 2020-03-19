import * as React from 'react'
import { Card, Row, Col, Icon } from '../../src/components'
import { action } from '@storybook/addon-actions'
export default function ButtonDemo() {
  return (
    <div>
      <h1>Card 卡片</h1>
      <h3>默认</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Card>这是内容这是内容这是内容这是内容这是内容</Card>
        </Col>
      </Row>
      <h3>Card 通栏样式</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Card title="这是标题" extra={<Icon type="apple" />} style={{ width: 300 }}>
            这是内容这是内容这是内容这是内容这是内容
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Card
            title="这是标题"
            extra={<Icon type="android" />}
            actions={[
              {
                content: <div>这是底部1</div>,
                onClick: action('这是底部1')
              },
              {
                content: <div>这是底部2</div>,
                onClick: action('这是底部2')
              },
              {
                content: <div>这是底部3</div>,
                onClick: action('这是底部3')
              }
            ]}
            style={{ width: 300, marginTop: 20 }}
          >
            这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Card style={{ width: 300, marginTop: 20 }}>
            <div>
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
              <div style={{ padding: 20, textAlign: 'center' }}>
                <div>This is the description</div>
                <div>Thank you, design</div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
