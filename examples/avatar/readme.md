# Avatar 头像

头像的展示

## 引入组件

```jsx
import { Avatar } from 'cp-ui-design'
```

## Demo 代码

```jsx
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
