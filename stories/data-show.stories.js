// import  React, { Component, useState } from "react";
// import { storiesOf } from "@storybook/react";
// import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

// import Icon from '../src/components/icon'
// import Button from '../src/components/button'
// import { Row, Col } from '../src/components/grid'
// import Avatar from '../src/components/avatar'
// import Step from '../src/components/step'
// import Tabs from '../src/components/tabs'
// import Spin from '../src/components/spin'
// import Progress from '../src/components/progress'
// import Tag from '../src/components/tag'
// import Affix from '../src/components/affix'
// import Collapse from '../src/components/collapse'
// import Card from '../src/components/card'
// import Badge from '../src/components/badge'
// import Modal from '../src/components/modal'
// import Pagination from '../src/components/pagination'
// import Slide from '../src/components/slide'
// import Divider from '../src/components/divider'
// import Menu from '../src/components/menu'
// const SubMenu = Menu.SubMenu
// const MenuItem = Menu.MenuItem
// const MenuGroup = Menu.MenuGroup

// const stories = storiesOf('Storybook Knobs', module);

// // Add the `withKnobs` decorator to add knobs support to your stories.
// // You can also configure `withKnobs` as a global decorator.
// stories.addDecorator(withKnobs);

// const TagChecked = Tag.TagChecked

// const types = ['check-circle', 'close-circle', 'left-circle', 'down-circle', 'minus-circle', 'plus-circle', 'right-circle', 
// 'time-circle', 'up-circle', 'warning-circle', 'sync', 'undo', 'redo', 'reload', 'message', 'setting', 'adduser', 'heart', 'error', 'star',
// 'link', 'tag', 'tags', 'right', 'left', 'up', 'down', 'arrowright', 'arrowup', 'arrowleft', 'arrowdown', 'upload', 'download', 'check', 'close',
// 'check-circle-fill', 'left-circle-fill', 'down-circle-fill', 'minus-circle-fill', 'close-circle-fill', 'info-circle-fill', 'up-circle-fill', 'right-circle-fill',
// 'plus-circle-fill', 'question-circle-fill', 'warning-circle-fill', 'heart-fill', 'message-fill', 'check-square-fill', 'down-square-fill', 'minus-square-fill', 'close-square-fill',
// 'left-square-fill', 'up-square-fill', 'right-square-fill', 'plus-square-fill', 'camera-fill', 'apple', 'android', 'apple-fill', 'QQ', 'chrome-fill', 'alipay-circle-fill',
// 'zoomout', 'zoomin', 'caret-down', 'caret-up', 'caret-right', 'caret-left', 'search', 'eye-fill', 'eye', 'eye-close', 'delete', 'spin'
// ]

// storiesOf('data show', module)
// .add('Icon', () => {
//   return (
//     <div>
//       <div style={{ display: 'flex', flexWrap: 'wrap', color: '#999' }}>
//         {
//           types.map(type => {
//             return (
//               <div style={{ width: 100, textAlign: 'center', padding: 10 }} className="icon-hover" key={type}>
//                 <div><Icon type={type}/></div>
//                 <div style={{ marginTop: 10 }}>{type}</div>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   )  
// })
// .add('Button', () => {
//   return (
//     <div>
//       <div className="mr-20">
//         <Button>初始按钮</Button>
//       </div>
//       <div className="mr-20">
//         <Button type="warning">警告按钮</Button>
//       </div>
//       <div className="mr-20">
//         <Button type="ghost">幽灵按钮</Button>
//       </div>
//       <div className="mr-20">
//         <Button size="large">大号按钮</Button>
//       </div>
//       <div className="mr-20">
//         <Button size="small">小号按钮</Button>
//       </div>
//       <div className="mr-20">
//         <Button disabled>不可用按钮</Button>
//       </div>
//       <div className="mr-20">
//         <Button loading>加载...</Button>
//       </div>
//       <div style={{ marginTop: 20 }}>
//         <Button icon={<Icon type="check-circle" />}>带有icon</Button>
//       </div>
//       <div style={{ marginTop: 20 }}>
//         <Button  onClick={() => alert('😂😂嘿嘿嘿😂😂')}>点击我，快！快！快！</Button>
//       </div>
//     </div>
//   )
// })
// .add('Grid', () => {
//   return (
//     <div>
//       <p>12列</p>
//       <div style={{ marginTop: 20 }}>
//         <Row gutter={10}>
//           <Col span={2}><div className="red">内容</div></Col>
//           <Col span={2}><div className="red">内容</div></Col>
//           <Col span={2}><div className="red">内容</div></Col>
//           <Col span={2}><div className="red">内容</div></Col>
//           <Col span={2}><div className="red">内容</div></Col>
//           <Col span={2}><div className="red">内容</div></Col>
//           <Col span={2}><div className="red">内容</div></Col>
//           <Col span={2}><div className="red">内容</div></Col>
//           <Col span={2}><div className="red">内容</div></Col>
//           <Col span={2}><div className="red">内容</div></Col>
//           <Col span={2}><div className="red">内容</div></Col>
//           <Col span={2}><div className="red">内容</div></Col>
//         </Row>
//       </div>
//       <p>6列</p>
//       <div style={{ marginTop: 20 }}>
//         <Row>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//         </Row>
//       </div>
//       <p>6列 间距为10</p>
//       <div style={{ marginTop: 20 }}>
//         <Row gutter={10}>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//         </Row>
//       </div>
//       <p>6列 间距20</p>
//       <div style={{ marginTop: 20 }}>
//         <Row gutter={20}>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//         </Row>
//       </div>
//       <p>垂直居中</p>
//       <div style={{ marginTop: 20 }}>
//         <Row gutter={20} align="middle">
//         <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//         </Row>
//       </div>
//       <p>底部对齐</p>
//       <div style={{ marginTop: 20 }}>
//         <Row gutter={20} align="bottom">
//         <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//         </Row>
//       </div>
//       <p> baseline</p>
//       <div style={{ marginTop: 20 }}>
//         <Row gutter={20} align="baseline">
//         <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//         </Row>
//       </div>
//       <p> 水平居中</p>
//       <div style={{ marginTop: 20 }}>
//         <Row gutter={20} align="middle" justify="center">
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//         </Row>
//       </div>
//       <p>水平局后</p>
//       <div style={{ marginTop: 20 }}>
//         <Row gutter={20} align="middle" justify="end">
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//         </Row>
//       </div>
//       <p>offset</p>
//       <div style={{ marginTop: 20 }}>
//         <Row gutter={20} align="middle" justify="end">
//           <Col span={8}><div className="red">内容</div></Col>
//           <Col span={8} offset={8}><div className="red">内容</div></Col>
//         </Row>
//       </div>
//       <div style={{ marginTop: 20 }}>
//         <Row gutter={20}>
//           <Col span={4}><div className="red">内容</div></Col>
//           <Col span={4} offset={2}><div className="red">内容</div></Col>
//           <Col span={4}><div className="red">内容</div></Col>
//         </Row>
//       </div>
//     </div>
//   )
// })
// .add('Avatar', () => {
//   return (
//     <div>
//       <Avatar icon="adduser"/>
//       <Avatar icon="adduser" size="large"/>
//       <Avatar icon="adduser" size="small"/>
//       <Avatar src="http://img0.imgtn.bdimg.com/it/u=2253122537,3805608083&fm=11&gp=0.jpg"/>
//       <Avatar src="http://img0.imgtn.bdimg.com/it/u=2894163781,1992732231&fm=26&gp=0.jpg" size="large"/>
//       <Avatar src="http://img5.imgtn.bdimg.com/it/u=2479827366,1415772881&fm=26&gp=0.jpg" size={64}/>
//       <div style={{ marginTop: 20 }}>
//         <Avatar src="http://img5.imgtn.bdimg.com/it/u=2479827366,1415772881&fm=26&gp=0.jpg" size={120}/>
//         <Avatar src="http://img5.imgtn.bdimg.com/it/u=2479827366,1415772881&fm=26&gp=0.jpg" size={120} shape="square"/>
//         <Avatar src="http://img5.imgtn.bdimg.com/it/u=2479827366,1415772881&fm=26&gp=0.jpg" shape="square"/>
//       </div>
//     </div>
//   )
// })
// .add('Step', () => {
//   class StepDemo extends Component {
//     state = {
//       current: 0
//     }
//     options = [{
//       title: '第一步',
//       describe: '这是第一步的描述'
//     }, {
//       title: '第二部',
//       describe: '这是第二部的描述'
//     }, {
//       title: '第伞部',
//       describe: '这是第三部的描述'
//     }]
//     options1 = [{
//       title: '第一步',
//       describe: '这是第一步的描述',
//       icon: <Icon type="alipay-circle-fill" />
//     }, {
//       title: '第二部',
//       describe: '这是第二部的描述',
//       icon: <Icon type="heart-fill" />
//     }, {
//       title: '第伞部',
//       describe: '这是第三部的描述',
//       icon: <Icon type="QQ" />
//     }]

//     handleClick = () => {
//       let current = this.state.current
//       if (current === 2) {
//         current = 0
//       } else {
//         current++
//       }
//       this.setState({ current })
//     }
//     render() {
//       return (
//         <div>
//           <p>水平展示</p>
//           <Step options={this.options} current={this.state.current}/>
//           <Step options={this.options} current={this.state.current} size="small"/>
//           <div style={{ marginTop: 20 }}>
//             <Step options={this.options} current={this.state.current} labelPlacement="vertical"/>
//             <Step options={this.options} current={this.state.current} labelPlacement="vertical" size="small"/>
//           </div>
//           <p>竖直展示</p>
//           <div style={{ marginTop: 20 }}>
//             <Step options={this.options} current={this.state.current} direction="vertical" />
//             <Step options={this.options} current={this.state.current} direction="vertical" size="small"/>
//           </div>
//           <p>自定义的图标</p>
//           <Step options={this.options1} current={this.state.current}/>
//           <div style={{ marginTop: 20 }}>
//             <Button onClick={this.handleClick}>点击看class改变</Button>
//           </div>
//         </div>
//       )
//     }
//   }
//   return (
//     <div>
//       <StepDemo />
//     </div>
//   )
// })
// .add('Tabs', () => {
//   class TabsDemo extends React.Component {
//     state = {
//       activeKey: 'a',
//       tabPosition: 'top'
//     }
//     position = ['top', 'right', 'bottom', 'left']
//     handleChange = key => {
//       this.setState({ activeKey: key })
//     }
//     handleClick = () => {
//       let index = this.position.indexOf(this.state.tabPosition)
//       if (index === 3) {
//         index = 0
//       } else {
//         index = index + 1
//       }
//       this.setState({ tabPosition: this.position[index] })
//     }
//     options = [
//       {
//         key: 'a',
//         tab: '标题等会',
//         content: '哈哈哈哈啊哈哈AAAAAAAAAA'
//       },
//       {
//         key: 'b',
//         tab: '标题件大事',
//         content: '哈哈哈哈啊哈哈BBBBBBBB'
//       },
//       {
//         key: 'c',
//         tab: '标题都是你吗',
//         content: '哈哈哈哈啊哈哈CCCCCCCCC'
//       }
//     ]
//     render() {
//       return (
//         <div>
//           <p>不带额外标题</p>
//           <Tabs activeKey={this.state.activeKey} onChange={this.handleChange} options={this.options}/>
//           <p>带额外标题</p>
//           <Tabs activeKey={this.state.activeKey} onChange={this.handleChange} options={this.options} tabBarExtraContent={<span>额外</span>} onExtraClick={() => alert('1232')}/>
//           <p>卡片</p>
//           <Tabs activeKey={this.state.activeKey} onChange={this.handleChange} options={this.options} type='card'/>
//           <p>多重位置选择</p>
//           <Tabs activeKey={this.state.activeKey} onChange={this.handleChange} options={this.options} tabPosition={this.state.tabPosition}/>
//           <Button onClick={this.handleClick}>{this.state.tabPosition}</Button>
//         </div>
//       )
//     }
//   }
//   return (
//     <TabsDemo />
//   )
// })
// .add('Spin', () => {
//   return (
//     <div>
//       <p>默认大小</p>
//       <Spin />
//       <p>样式大小</p>
//       <Spin size="small"/>
//       <Spin />
//       <p>不同颜色</p>
//       <Spin color="red"/>
//       <Spin color="orange"/>
//       <Spin color="yellow"/>
//       <Spin color="blue"/>
//       <Spin color="green"/>
//       <Spin color="purple"/>
//       <p>带有tip</p>
//       <Spin tip="loading"/>
//       <p>带有children</p>
//       <div>
//         <Spin tip="loading">
//           <div style={{ width: 200 }}>
//             打算块解开打卡的金卡和 好的就看很简单啊数据库 和的金卡是好的就看好的看就撒好的就看啊
//             打算块解开打卡的金卡和 好的就看很简单啊数据库 和的金卡是好的就看好的看就撒好的就看啊
//             打算块解开打卡的金卡和 好的就看很简单啊数据库 和的金卡是好的就看好的看就撒好的就看啊
//           </div>
//         </Spin>
//       </div>
//     </div>
//   )
// })
// .add('Progress', () => {
//   class ProgressDemo extends React.Component {
//     state = {
//       percent: 0
//     }
//     handleClick = () => {
//       let percent = this.state.percent
//       if (percent >= 100) {
//         percent = 0
//       } else {
//         percent += 10
//       }
//       this.setState({ percent })
//     }
//     render() {
//       return (
//         <div>
//           <p>各种颜色</p>
//           <Progress activeColor="blue" percent={this.state.percent}/>
//           <Progress activeColor="orange" percent={this.state.percent}/>
//           <Progress activeColor="yellow" percent={this.state.percent}/>
//           <Progress activeColor="green" percent={this.state.percent}/>
//           <Progress activeColor="purple" percent={this.state.percent}/>
//           <Progress percent={this.state.percent}/>
//           <p>不同尺寸</p>
//           <h5>小尺寸</h5>
//           <Progress percent={this.state.percent} size="small"/>
//           <h5>大尺寸</h5>
//           <Progress percent={this.state.percent} size="large"/>
//           <p>圆形</p>
//           <Progress percent={this.state.percent} type="circle" />
//           <Progress percent={this.state.percent} type="circle" activeColor="blue" />
//           <Progress percent={this.state.percent} type="circle" activeColor="orange" />
//           <Progress percent={this.state.percent} type="circle" activeColor="yellow" />
//           <Progress percent={this.state.percent} type="circle" activeColor="green" />
//           <Progress percent={this.state.percent} type="circle" activeColor="purple" />
//           <p>自定义文本</p>
//           <Progress percent={this.state.percent} type="circle" textRender={percent => {
//             if (percent === 100) return '成功'
//             return 'loading'
//           }}/>
//           <p>不同尺寸</p>
//           <Progress percent={this.state.percent} type="circle" size="small"/>
//           <Progress percent={this.state.percent} type="circle" size="large"/>
//           <Button onClick={this.handleClick}>点击我</Button>
//         </div>
//       )
//     }
//   }
//   return (
//     <ProgressDemo />
//   )
// })
// .add('Tag', () => {
//   class TagDemo extends React.Component {
//     state = {
//       checked: false
//     }
//     handleChange = checked => {
//       this.setState({ checked })
//     }
//     render() {
//       return (
//         <div>
//           <p>尺寸</p>
//           <Tag>默认</Tag>
//           <Tag size="small" style={{ marginLeft: 10 }}>默认</Tag>
//           <Tag size="large" style={{ marginLeft: 10 }}>默认</Tag>
//           <p>关闭</p>
//           <Tag closable onClose={() => console.log('close')}>
//             显示关闭按钮
//           </Tag>
//           <p>自定义颜色</p>
//           <Tag color="blue">默认</Tag>
//           <Tag color="red" style={{ marginLeft: 10 }}>默认</Tag>
//           <Tag color="orange" style={{ marginLeft: 10 }}>默认</Tag>
//           <Tag color="yellow" style={{ marginLeft: 10 }}>默认</Tag>
//           <Tag color="green" style={{ marginLeft: 10 }}>默认</Tag>
//           <Tag color="purple" style={{ marginLeft: 10 }}>默认</Tag>
//           <p>不同大小的颜色</p>
//           <Tag color="blue" size="small">默认</Tag>
//           <Tag color="red" style={{ marginLeft: 10 }} size="small">默认</Tag>
//           <Tag color="orange" style={{ marginLeft: 10 }} size="small">默认</Tag>
//           <Tag color="yellow" style={{ marginLeft: 10 }} size="small">默认</Tag>
//           <Tag color="green" style={{ marginLeft: 10 }} size="small">默认</Tag>
//           <Tag color="purple" style={{ marginLeft: 10 }} size="small">默认</Tag>
//           <Tag color="blue" size="large" style={{ marginLeft: 10 }}>默认</Tag>
//           <Tag color="red" style={{ marginLeft: 10 }} size="large">默认</Tag>
//           <Tag color="orange" style={{ marginLeft: 10 }} size="large">默认</Tag>
//           <Tag color="yellow" style={{ marginLeft: 10 }} size="large">默认</Tag>
//           <Tag color="green" style={{ marginLeft: 10 }} size="large">默认</Tag>
//           <Tag color="purple" style={{ marginLeft: 10 }} size="large">默认</Tag>
//           <Tag color="purple" style={{ marginLeft: 10 }} size="large" closable>默认</Tag>
//           <p>checked 标签</p>
//           <TagChecked checked={this.state.checked} onChange={this.handleChange}>默认选中</TagChecked>
//           <br/>
//           <Tag.TagChecked checked={this.state.checked} type="ticked" onChange={this.handleChange}>默认选中</Tag.TagChecked>
//           <p>disabled</p>
//           <TagChecked checked={this.state.checked} onChange={this.handleChange} disabled>默认选中</TagChecked>
//         </div>
//       )
//     }
//   }
//   return (
//     <div>
//       <TagDemo />
//     </div>
//   )
// })
// .add('Affix', () => {
//   return (
//     <div>
//       <div style={{ height:200, background: 'skyblue' }}>内容</div>
//       <Affix offsetTop={50} useFix onChange={affixed => console.log("触发：",affixed)}>
//         <Button>固钉不支持sticky</Button>
//       </Affix>
//       <div style={{ height:500, background: 'skyblue' }}>内容</div>
//       <Affix offsetTop={200} >
//         <Button>固钉支持sticky</Button>
//       </Affix>
//       <div style={{ height:1200, background: 'skyblue' }}>内容</div>
//     </div>
//   )
// })
// .add('Message', () => {
//   class MessageDemo extends Component {
//     handleClick = () => {
//       // AddMesssage({ content:'这是内容' })
//     }
//     render() {
//       return (
//         <div>
//           <Button onClick={this.handleClick}>点击我</Button>
//         </div>
//       )
//     }
//   }
//   return (
//     <MessageDemo />
//   )
// })
// .add('Collapse', () => {
//   let dataSource = [], 
//   dataSource2 = []
//   for(let i = 0; i < 5; i++) {
//     dataSource.push({
//       key: `${i + 10}`,
//       title: `标题-${i}`,
//       content: `内容-${i}`
//     })
//     if (i === 3) {
//       dataSource2.push({
//         key: `${i + 10}`,
//         title: `标题-${i}`,
//         content: `内容-${i}`,
//         disabled: true
//       })
//     } else {
//       dataSource2.push({
//         key: `${i + 10}`,
//         title: `标题-${i}`,
//         content: `内容-${i}`
//       })
//     }
//   }
//   class CollapseDemo extends Component {

//     state = {
//       dataSource: dataSource,
//       dataSource2: dataSource2,
//       activeKey: [],
//       activeKey1: [],
//       activeKey2: []
//     }

//     handleChange = activeKey => {
//       this.setState({ activeKey })
//     }
//     handleChange1 = activeKey1 => {
//       this.setState({ activeKey1 })
//     }
//     handleChange2 = activeKey2 => {
//       this.setState({ activeKey2 })
//     }
    
//     render() {
//       console.log('activeKey1', this.state.activeKey1)
//       return (
//         <div>
//           <p>正常模式</p>
//           <Collapse dataSource={this.state.dataSource} onChange={this.handleChange} activeKey={this.state.activeKey}/>
//           <div>
//             <p>手风琴模式</p>
//             <Collapse dataSource={this.state.dataSource} onChange={this.handleChange1} activeKey={this.state.activeKey1} accordion/>
//           </div>
//           <div>
//             <p>不可用</p>
//             <Collapse dataSource={this.state.dataSource2} onChange={this.handleChange2} activeKey={this.state.activeKey2} />
//           </div>
//           <p>无边框</p>
//           <Collapse dataSource={this.state.dataSource} onChange={this.handleChange} activeKey={this.state.activeKey} border={false}/>
//         </div>
//       )
//     }
//   }
//   return (
//     <div>
//       <CollapseDemo />
//     </div>
//   )
// })
// .add('Card', () => {
//   const actions = [{
//     content: <Icon type="apple" />,
//     onClick: () => console.log('111')
//   }, {
//     content: <Icon type="chrome-fill" />,
//     onClick: () => console.log('222')
//   }]
//   return (
//     <div>
//       <div>
//         <Card title="这是标题" extra={<Icon type="QQ" />} style={{ width: 300 }}>
//           这是内容这是内容这是内容这是内容这是内容
//         </Card>
//       </div>
//       <div>
//         <Card title="这是标题" extra={<Icon type="QQ" />} actions={actions} style={{ width: 300, marginTop: 20 }} >
//           这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
//         </Card>
//       </div>
//       <div>
//         <Card style={{ width: 300, marginTop: 20 }}>
//           <div>
//             <img src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png" />
//             <div style={{ padding: 20, textAlign: 'center' }}>
//               <div>Father's Day</div>
//               <div>Thank you, papa</div>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   )
// })
// .add('Badge', () => {
//   return (
//     <div>
//       <br/>
//       <p>正常徽标</p>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge count={5}>
//           <a style={{ width: 40, height: 40, background: '#ccc', display: 'block', borderRadius: 4 }}></a>
//         </Badge>
//       </div>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge count={10}>
//           <a style={{ width: 40, height: 40, background: '#ccc', display: 'block', borderRadius: 4 }}></a>
//         </Badge>
//       </div>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge count={99}>
//           <a style={{ width: 40, height: 40, background: '#ccc', display: 'block', borderRadius: 4 }}></a>
//         </Badge>
//       </div>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge count={200}>
//           <a style={{ width: 40, height: 40, background: '#ccc', display: 'block', borderRadius: 4 }}></a>
//         </Badge>
//       </div>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge count={200} overflowCount={999}>
//           <a style={{ width: 40, height: 40, background: '#ccc', display: 'block', borderRadius: 4 }}></a>
//         </Badge>
//       </div>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge count={2000} overflowCount={999}>
//           <a style={{ width: 40, height: 40, background: '#ccc', display: 'block', borderRadius: 4 }}></a>
//         </Badge>
//       </div>
//       <p>只有红点的情况</p>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge dot>
//           <a style={{ width: 40, height: 40, background: '#ccc', display: 'block', borderRadius: 4 }}></a>
//         </Badge>
//       </div>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge dot status="success">
//           <a style={{ width: 40, height: 40, background: '#ccc', display: 'block', borderRadius: 4 }}></a>
//         </Badge>
//       </div>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge dot status="error">
//           <a style={{ width: 40, height: 40, background: '#ccc', display: 'block', borderRadius: 4 }}></a>
//         </Badge>
//       </div>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge dot status="warning">
//           <a style={{ width: 40, height: 40, background: '#ccc', display: 'block', borderRadius: 4 }}></a>
//         </Badge>
//       </div>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge dot status="process">
//           <a style={{ width: 40, height: 40, background: '#ccc', display: 'block', borderRadius: 4 }}></a>
//         </Badge>
//       </div>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge dot status="default">
//           <a style={{ width: 40, height: 40, background: '#ccc', display: 'block', borderRadius: 4 }}></a>
//         </Badge>
//       </div>
//       <p>不包裹任何子元素</p>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge count={10} />
//       </div>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge count={5} />
//       </div>
//       <p>自定义</p>
//       <div style={{ display: 'inline-block', marginLeft: 20 }}>
//         <Badge count="hot">
//           <a style={{ width: 40, height: 40, background: '#ccc', display: 'block', borderRadius: 4 }}></a>
//         </Badge>
//       </div>
//     </div>
//   )
// })
// .add('Modal', () => {
//   class OverlayDemo extends Component {
//     state = {
//       visible: false,
//       visible1: false
//     }

//     handleClick = () => {
//       this.setState({ visible: true })
//     }

//     handleClick1 = () => {
//       this.setState({ visible1: true })
//     }

//     handleClose = () => {
//       this.setState({ visible: false  })
//     }

//     handleClose1 = () => {
//       this.setState({ visible1: false  })
//     }

//     handleOk = () => {
//       this.setState({ visible: false })
//     }

//     handleOk1 = () => {
//       this.setState({ visible1: false })
//     }

//     render() {
//       return (
//         <div>
//           <Button onClick={this.handleClick}>点击出弹层不销毁</Button>
//           <div style={{ marginTop: 20 }}>
//             <Button onClick={this.handleClick1}>点击出弹层销毁</Button>
//           </div>
//           <Modal onCancel={this.handleClose} visible={this.state.visible} title="标题测试" onOk={this.handleOk} destroy={false}>
//             这是内容区域
//           </Modal>
//           <Modal onCancel={this.handleClose1} visible={this.state.visible1} title="标题测试" onOk={this.handleOk1}>
//             这是内容区域
//           </Modal>
//         </div>
//       )
//     }
//   }
//   return (
//     <div>
//       <OverlayDemo />
//     </div>
//   )
// })
// .add('Pagination', () => {
//   function PaginationDemo() {
//     const [current, setCurrent] = useState(5)

//     const handleChange = value => {
//       setCurrent(value)
//       console.log("value:", value)
//     }
//     return (
//       <div>
//         <div style={{ padding: 10, color: '#ccc' }}> >> 默认显示5页，一页10条</div>
//         <div><Pagination current={current} total={134} onChange={handleChange}/></div>
//         <div style={{ padding: 10, color: '#ccc' }}> >> 跳至某页</div>
//         <div><Pagination current={current} total={134} onChange={handleChange} showQuickJumper /></div>
//         <div style={{ padding: 10, color: '#ccc' }}> >> 一页5条</div>
//         <div><Pagination current={current} total={134} onChange={handleChange} pageSize={5} /></div>
//         <div style={{ padding: 10, color: '#ccc' }}> >> 显示出10页</div>
//         <div><Pagination current={current} total={134} onChange={handleChange} pageSize={5} pageShowCount={10}/></div>
//         <div style={{ padding: 10, color: '#ccc' }}> >> 小尺寸</div>
//         <div><Pagination current={current} total={134} onChange={handleChange} pageSize={5} pageShowCount={10} size='small'/></div>
//         <div style={{ padding: 10, color: '#ccc' }}> >> 大尺寸</div>
//         <div><Pagination current={current} total={134} onChange={handleChange} pageSize={5} pageShowCount={10} size='large'/></div>
//       </div>
      
//     )
//   }

//   return (
//     <div>
//       <div><PaginationDemo /></div>
//     </div>
//   )
// })
// .add('Slide', () => {
//   function SlideDemo() {
//     const [value, setValue] = useState(0)
//     return (
//       <div style={{ marginTop: 20 }}>
//         <Slide value={value} onChange={value => {console.log('value:', value); setValue(value)}}/>
//       </div>
//     )
//   }
//   return <SlideDemo />
// })
// .add('Divider', () => {
//   return (
//     <div>
//       <div style={{ width: 500}}>
//         <div>水平分割线</div>
//         <div>尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区</div>
//         <Divider />
//         <div>尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区虚线</div>
//         <Divider dashed/>
//         <div>尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区虚线</div>
//         <Divider orientation='left'>left</Divider>
//         <div>尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区虚线</div>
//         <Divider>center</Divider>
//         <div>尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区尼日荣区虚线</div>
//         <Divider orientation='right'>right</Divider>
//       </div>
//       <div>
//         <div>竖直分割线</div>
//         <a>主页</a>
//         <Divider type='vertical' />
//         <a>组件</a>
//         <Divider type='vertical' />
//         <a>关于我们</a>
//       </div>
//     </div>
//   )
// })
// .add('Menu', () => {
//   function MenuDemo() {

//     const [selectedKeys, setSelectedKeys] = React.useState([])
//     const [openKeys, setOpenKeys] = React.useState([])

//     const handleSelect = (key, selectedKey) => {
//       setSelectedKeys(selectedKey)
//     }

//     return (
//       <div style={{ color: '#000'}}>
//         <Menu style={{ width: 256 }}
//           openKeys={openKeys}
//           onSelect={handleSelect} 
//           selectedKeys={selectedKeys} 
//           onOpenChange={openKeys => {
//             console.log(openKeys)
//             setOpenKeys(openKeys)
//           }}
//         >
//           <SubMenu openKey="sub1" title="Navigation One">
//             <MenuGroup key="g1" title="item 1">
//               <MenuItem itemKey="1">option 1</MenuItem>
//               <MenuItem itemKey="2">option 2</MenuItem>
//             </MenuGroup>
//             <MenuGroup key="g2" title="item 2">
//               <MenuItem itemKey="3">option 3</MenuItem>
//               <MenuItem itemKey="4">option 4</MenuItem>
//             </MenuGroup>
//           </SubMenu>
//           <SubMenu openKey="sub2" title="Navigation Two">
//             <MenuItem itemKey="5">Option 5</MenuItem>
//             <MenuItem itemKey="6">Option 6</MenuItem>
//             <SubMenu openKey="sub3" title="Submenu" style={{ paddingLeft: 48}}>
//               <MenuItem itemKey="7" style={{ paddingLeft: 72}}>Option 7</MenuItem>
//               <MenuItem itemKey="8" style={{ paddingLeft: 72}}>Option 8</MenuItem>
//             </SubMenu>
//           </SubMenu>
//           <SubMenu openKey="sub4" title="Navigation Three">
//             <MenuItem itemKey="9">Option 9</MenuItem>
//             <MenuItem itemKey="10">Option 10</MenuItem>
//             <MenuItem itemKey="11">Option 11</MenuItem>
//             <MenuItem itemKey="12">Option 12</MenuItem>
//           </SubMenu>
//         </Menu>
//       </div>
//     )
//   }
//   return (
//     <MenuDemo />
//   )
// })