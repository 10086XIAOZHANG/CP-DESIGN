import * as React from 'react'
export default function ButtonDemo() {
  return (
    <div>
      <h1>Getting started</h1>
      <p>This guide will help you render components and applications with React for Web.</p>
      <h1>Characteristics and advantages 特性和优势</h1>
      <ul>
        <li>UI 样式高度可配置，拓展性更强，轻松适应各类产品风格</li>
        <li>使用 TypeScript 开发，提供类型定义文件，支持类型及属性智能提示，方便业务开发</li>
        <li>全面兼容 react / preact</li>
        <li>引入Font Awesome 图标字体库 等优化方案，一体式开发</li>
      </ul>
      <h1>Install 安装</h1>
      <p>npm install cp-design --save</p>
      <h1>User 组件使用实例：</h1>
      <p>
        <pre style={{ wordWrap: 'break-word' }}>
          <code>
            <p>
              {
                "import {Button} from 'cp-design';\nReactDOM.render(<Button>Start</Button>, mountNode);"
              }
            </p>
          </code>
        </pre>
      </p>
      <h1>浏览器支持</h1>
      <ul>
        <li>iOS</li>
        <li>Android 4.0+</li>
      </ul>
      <h1>Author Email</h1>
      <p>fcj_zhang@163.com</p>
      <h1>Blog address</h1>
      <p>
        <a href="https://www.cnblogs.com/fuGuy/">浮云随笔</a>
      </p>
      <h1>Github</h1>
      <p>
        <a href="https://github.com/10086XIAOZHANG/CP-DESIGN">CP-DESIGN</a>
      </p>
    </div>
  )
}
