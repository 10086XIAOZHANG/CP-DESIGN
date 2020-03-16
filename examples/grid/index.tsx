import * as React from 'react'
import { Row, Col } from '../../src/components'

export default function GridDemo() {
  return (
    <div>
      <h1>布局</h1>
      <h3>Basic</h3>
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
