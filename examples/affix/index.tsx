import * as React from 'react'
import { Affix, Button } from '../../src/components'

export default function AffixDemo() {
  return (
    <div>
      <div style={{ height:200, background: 'skyblue' }}>内容</div>
      <Affix offsetTop={50} useSticky onChange={affixed => console.log("触发：",affixed)}>
        <Button>固钉不支持sticky</Button>
      </Affix>
      <div style={{ height:500, background: 'skyblue' }}>内容</div>
      <Affix offsetTop={200} >
        <Button>固钉支持sticky</Button>
      </Affix>
      <div style={{ height:1200, background: 'skyblue' }}>内容</div>
    </div>
  )
}