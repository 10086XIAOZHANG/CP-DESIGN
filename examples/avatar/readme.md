# Avatar 头像

头像的展示

## 引入组件

```jsx
import { Avatar } from 'cp-design'
```

## Demo 代码

```jsx
export default function AvatarDemo() {
  return (
    <div>
      <Avatar icon="adduser" size="small" />
      <Avatar icon="adduser" />
      <Avatar icon="adduser" size="large" />
      <Avatar style={{ color: “#f56a00”, backgroundColor: “#fde3cf” }}>U</Avatar>
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
```

## Api

| 属性    |        说明        |            类型            |   默认值 | 可选 |
| ------- | :----------------: | :------------------------: | -------: | :--: |
| size    |    大小， 尺寸     | `large`, `normal`, `small` | `normal` |  --  |
| shape   |        形状        |     `circle`, `square`     | `circle` |  --  |
| src     |     图片的地址     |           string           |       -- |  --  |
| icon    |     图标的名称     |           string           |       -- |  --  |
| alt     |  图片不显示的占位  |           string           |       -- |  --  |
| onError | 图片加载失败的回调 |         fun():void         |       -- |  --  |
| onClick |   点击头像的回调   |        fun() : void        |       -- |  --  |
| style   |     自定义样式     |           Object           |       -- |  --  |
