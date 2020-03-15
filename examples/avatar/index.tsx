import * as React from 'react'
import { Avatar } from '../../src/components'

export default function AvatarDemo() {
  return (
    <div>
      <Avatar icon="adduser" />
      <Avatar icon="adduser" size="large" />
      <Avatar icon="adduser" size="small" />
      <Avatar src="http://img0.imgtn.bdimg.com/it/u=2253122537,3805608083&fm=11&gp=0.jpg" />
      <Avatar
        src="http://img0.imgtn.bdimg.com/it/u=2894163781,1992732231&fm=26&gp=0.jpg"
        size="large"
      />
      <Avatar
        src="http://img5.imgtn.bdimg.com/it/u=2479827366,1415772881&fm=26&gp=0.jpg"
        size={64}
      />
      <Avatar
        src="http://img5.imgtn.bdimg.com/it/u=2479827366,1415772881&fm=26&gp=0.jpg"
        size={128}
        shape="square"
      />
    </div>
  )
}
