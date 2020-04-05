import * as React from 'react'
import { NoticeBar, Icon, Row, Col } from '../../src/components'
// import { action } from '@storybook/addon-actions'
export default function NoticeBarDemo() {
  return (
    <div>
      <h1>NoticeBar 通告栏</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <NoticeBar marqueeProps={{ loop: false, style: { padding: '0 7.5px' } }}>
            Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed
            during National Day.
          </NoticeBar>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <NoticeBar mode="link" onClick={() => alert('1')}>
            Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed
            during National Day.
          </NoticeBar>
        </Col>
      </Row>

      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <NoticeBar mode="closable" action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}>
            Closable demo for `actionText`.
          </NoticeBar>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
            Customized icon.
          </NoticeBar>
        </Col>
      </Row>
    </div>
  )
}
