# Affix 固钉

主要用于固定某个部分

## 引入组件

```jsx
import { Affix } from 'cp-ui-design'
```

## Demo 代码

```jsx
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
```

## Api

| 属性         |                 说明                 |           类型           |  默认值 | 可选 |
| ------------ | :----------------------------------: | :----------------------: | ------: | :--: |
| offsetTop    |   距离窗口底部达到指定偏移量后触发   |          number          |      -- |  --  |
| offsetButtom |   距离窗口底部达到指定偏移量后触发   |          number          |      -- |  --  |
| container    |                 容器                 |   fun() => HTMLElement   |      -- |  --  |
| onChange     | 固定状态发生改变的回调，css 下不生效 | (fixed: boolean) => void |      -- |  --  |
| useSticky    |     是否使用 js 行为设置 sticky      |         boolean          | `false` |  --  |
