import * as React from 'react'
import { Row, Col } from '../../src/components'
export default function GridDemo() {
  return (
    <div>
      <h1>布局</h1>
      <h3>类型、尺寸</h3>
      <div>
        <p>4列</p>
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

        <p>3列 间距为10</p>
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
        <p>垂直居中</p>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} align="middle">
            <Col span={12}>
              <div className="placeholder">Block</div>
            </Col>

            <Col span={12}>
              <div className="placeholder">
                BlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlock
              </div>
            </Col>
          </Row>
        </div>
        <p>底部对齐</p>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} align="bottom">
            <Col span={12}>
              <div className="placeholder">
                BlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlock
              </div>
            </Col>
            <Col span={12}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <p> baseline</p>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} align="baseline">
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4}>
              <div className="placeholder">
                BlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlockBlock
              </div>
            </Col>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <p> 水平居中</p>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} align="middle" justify="center">
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
        <p>水平局后</p>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} align="middle" justify="end">
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
        <p>offset</p>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20} align="middle" justify="end">
            <Col span={8}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={8} offset={8}>
              <div className="placeholder">Block</div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 20 }}>
          <Row gutter={20}>
            <Col span={4}>
              <div className="placeholder">Block</div>
            </Col>
            <Col span={4} offset={2}>
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
