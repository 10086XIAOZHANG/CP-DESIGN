import * as React from 'react'
import { Avatar } from '../../src/components'

export default function AvatarDemo() {
  return (
    <div>
      <h1>Avatar 头像</h1>
      <h3>基本</h3>
      <Avatar icon="adduser" size="small" />
      <Avatar icon="adduser" />
      <Avatar icon="adduser" size="large" />

      <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large" />
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={64} />
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        size={128}
        shape="square"
      />
    </div>
  )
}
