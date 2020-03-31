import * as React from 'react'
import { TabBar, Row, Col, Icon, Button } from '../../src/components'

const { useState } = React
export default function TabBarDemo() {
  const [isHidden, setIsHidden] = useState(false)
  const items = [
    {
      dot: true,
      selected: true,
      icon: <Icon type={'qq'} size={18} />,
      selectedIcon: <Icon type={'qq'} color="#ff5454" size={18} />,
      title: <span>Lift</span>,
      selectedTitle: <span style={{ color: '#ff5454' }}>Lift</span>,
      key: 'lift',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '0 20%',
            height: '100%',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          <h3 style={{ marginBottom: '12px' }}> TabBar 标签栏</h3>
          <Button
            onClick={() => {
              setIsHidden(true)
            }}
          >
            HIDDEN Bar
          </Button>
          <Button
            style={{ marginTop: '12px' }}
            onClick={() => {
              setIsHidden(false)
            }}
          >
            SHOW Bar
          </Button>
        </div>
      )
    },
    {
      badge: 1,
      icon: <Icon type={'slideshare'} size={18} />,
      selectedIcon: <Icon type={'slideshare'} color="#ff5454" size={18} />,
      title: <span>Koubei</span>,
      selectedTitle: <span style={{ color: '#ff5454' }}>Koubei</span>,
      key: 'koubei',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of second tab
        </div>
      )
    },
    {
      badge: 1,
      dot: true,
      selected: true,
      icon: <Icon type={'snapchat'} size={18} />,
      selectedIcon: <Icon type={'snapchat'} color="#ff5454" size={18} />,
      title: 'Friend',
      selectedTitle: <span style={{ color: '#ff5454' }}>Friend</span>,
      key: 'Friend',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of third tab
        </div>
      )
    },
    {
      badge: 1,
      dot: true,
      selected: true,
      icon: <Icon type={'stumbleupon-circle'} size={18} />,
      selectedIcon: <Icon type={'stumbleupon-circle'} color="#ff5454" size={18} />,
      title: 'My',
      selectedTitle: <span style={{ color: '#ff5454' }}>My</span>,
      key: 'My',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '1440px',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of four tab
        </div>
      )
    }
  ]
  const onPress = (key: string) => {
    console.log(key)
  }
  return (
    <div>
      <Row
        style={{
          marginBottom: '1rem',
          position: 'fixed',
          height: '100%',
          top: 0,
          left: 0
        }}
      >
        <Col span={24}>
          <TabBar items={items} hidden={isHidden} barTintColor={'#fff'} onPress={onPress} />
        </Col>
      </Row>
    </div>
  )
}
