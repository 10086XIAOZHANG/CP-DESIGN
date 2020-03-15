import * as React from 'react'
import ClassNames from 'classnames'
import { CollapseProps } from './interface'
import Panel from './panel'

import './style/index.scss'

interface ClickInterface {
  props: CollapseProps
  key: string
  activeKey: Array<string>
  expanded: boolean
}

const noop = () => {}
const prefixCls = 'cp-ui-collapse'

const defaultProps: CollapseProps = {
  border: true,
  activeKey: [],
  accordion: false,
  dataSource: [],
  onChange: noop
}

const getClassNames = ({ border, accordion }: CollapseProps) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-border`]: border,
    [`${prefixCls}-accordion`]: accordion
  })
}

const handleChange = ({ props, key, activeKey, expanded }: ClickInterface) => {
  const { onChange, accordion } = props
  let activeKeyCopy = activeKey.slice()
  if (expanded) {
    accordion ? (activeKeyCopy = [key]) : activeKeyCopy.push(key)
  } else {
    accordion ? (activeKeyCopy = []) : activeKeyCopy.splice(activeKeyCopy.indexOf(key), 1)
  }
  onChange(activeKeyCopy)
}

const Collapse: React.SFC<CollapseProps> & { defaultProps: Partial<CollapseProps> } = props => {
  const { dataSource, activeKey } = props
  const classStr = getClassNames(props)
  return (
    <div className={classStr}>
      {dataSource.map((data, index) => {
        const key = data.key || `${index}`
        return (
          <Panel
            key={key}
            content={data.content}
            icon={data.icon}
            title={data.title}
            expanded={activeKey.includes(key)}
            disabled={data.disabled}
            onChange={expanded => handleChange({ props, key, activeKey, expanded })}
          />
        )
      })}
    </div>
  )
}

Collapse.defaultProps = defaultProps

export default Collapse
