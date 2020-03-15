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
      <div style={{ height: 200, background: 'skyblue' }}>内容</div>
      <Affix offsetTop={50} useSticky onChange={affixed => console.log('触发：', affixed)}>
        <Button>固钉不支持sticky</Button>
      </Affix>
      <div style={{ height: 500, background: 'skyblue' }}>内容</div>
      <Affix offsetTop={200}>
        <Button>固钉支持sticky</Button>
      </Affix>
      <div style={{ height: 1200, background: 'skyblue' }}>内容</div>
    </div>
  )
}
```

## Api

| 属性      |                 说明                 |           类型           |  默认值 | 可选 |
| --------- | :----------------------------------: | :----------------------: | ------: | :--: |
| offsetTop |            距离顶部的距离            |          number          |       0 |  --  |
| container |                 容器                 |   fun() => HTMLElement   |      -- |  --  |
| onChange  | 固定状态发生改变的回调，css 下不生效 | (fixed: boolean) => void |      -- |  --  |
| useSticky |     是否使用 js 行为设置 sticky      |         boolean          | `false` |  --  |
