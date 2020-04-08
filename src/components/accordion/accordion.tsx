import * as React from 'react'
import ClassNames from 'classnames'
import { AccordionProps } from './interface'
import Panel from './panel'

import './style/index.scss'

interface ClickInterface {
  props: AccordionProps
  key: string
  expanded: boolean
  activeKeyList: string[]
  setActiveKeyList: React.Dispatch<React.SetStateAction<string[]>>
}
const { useState } = React
const noop = () => {}
const prefixCls = 'cp-ui-accordion'

const defaultProps: AccordionProps = {
  border: true,
  activeKey: [],
  accordion: false,
  dataSource: [],
  onChange: noop
}
const getClassNames = ({ border, accordion, className }: AccordionProps) => {
  return ClassNames(prefixCls, className, {
    [`${prefixCls}-border`]: border,
    [`${prefixCls}-accordion`]: accordion
  })
}

const handleChange = ({
  props,
  key,
  expanded,
  activeKeyList,
  setActiveKeyList
}: ClickInterface) => {
  const { onChange, accordion } = props
  let activeKeyCopy = activeKeyList.slice()
  if (expanded) {
    if (accordion && !activeKeyList.includes(key)) {
      activeKeyCopy = [key]
      setActiveKeyList([key])
    } else if (!activeKeyList.includes(key)) {
      activeKeyCopy.push(key)
      setActiveKeyList(activeKeyCopy)
    }
  } else {
    if (accordion && activeKeyList.includes(key)) {
      activeKeyCopy = []
      setActiveKeyList([])
    } else if (activeKeyList.includes(key)) {
      activeKeyList.splice(activeKeyList.indexOf(key), 1)
      activeKeyCopy = [...activeKeyList]
      setActiveKeyList(activeKeyCopy)
    }
  }
  onChange(activeKeyCopy, key)
}

const Accordion: React.FC<AccordionProps> & { defaultProps: Partial<AccordionProps> } = props => {
  const { dataSource, activeKey, style } = props
  const [activeKeyList, setActiveKeyList] = useState<string[]>(activeKey ?? [])
  const classStr = getClassNames(props)
  return (
    <div className={classStr} style={style}>
      {dataSource.map((data, index) => {
        const key = data.key || `${index}`
        return (
          <Panel
            key={key}
            content={data.content}
            rightOpenIcon={data.rightOpenIcon}
            rightCloseIcon={data.rightCloseIcon}
            icon={data.icon}
            title={data.title}
            defaultExpanded={activeKeyList.includes(key)}
            disabled={data.disabled}
            onChange={expanded =>
              handleChange({ props, key, expanded, activeKeyList, setActiveKeyList })
            }
          />
        )
      })}
    </div>
  )
}

Accordion.defaultProps = defaultProps

export default Accordion
