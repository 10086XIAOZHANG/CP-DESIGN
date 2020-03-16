import * as React from 'react'
import { Affix, Button } from '../../src/components'
import { action } from '@storybook/addon-actions'
export default function AffixDemo() {
  return (
    <div>
      <div
        style={{
          paddingTop: 60,
          height: 300,
          backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg)'
        }}
      ></div>
      <Affix offsetTop={50} useSticky onChange={action('触发：')}>
        <Button>固钉不支持sticky</Button>
      </Affix>
      <div
        style={{
          paddingTop: 60,
          height: 1,
          backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg)'
        }}
      ></div>
      <Affix offsetTop={200}>
        <Button>固钉支持sticky</Button>
      </Affix>
      <div
        style={{
          paddingTop: 60,
          height: 1300,
          backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg)'
        }}
      ></div>
    </div>
  )
}
