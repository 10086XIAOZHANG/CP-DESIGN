import * as React from 'react'
import { Affix, Button } from '../../src/components'
import { action } from '@storybook/addon-actions'
export default function AffixDemo() {
  return (
    <div>
      <h1>Affix 固钉</h1>
      <h3>Basic</h3>
      <div
        style={{
          paddingTop: 60,
          height: 300,
          backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg)'
        }}
      ></div>
      <Affix offsetTop={50} onChange={action('触发：')}>
        <Button>固钉不支持sticky</Button>
      </Affix>
      <div
        style={{
          paddingTop: 60,
          height: 1,
          backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg)'
        }}
      ></div>
      <Affix offsetTop={10}>
        <Button>固钉支持sticky</Button>
      </Affix>
      <div
        style={{
          paddingTop: 60,
          height: 12300,
          backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg)'
        }}
      ></div>
      <Affix offsetBottom={10}>
        <Button>固钉底部支持sticky</Button>
      </Affix>
      <div
        style={{
          paddingTop: 60,
          height: 12300,
          backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg)'
        }}
      ></div>
    </div>
  )
}
