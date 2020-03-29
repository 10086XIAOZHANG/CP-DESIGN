import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ClassNames from 'classnames'
import { ActionSheetProps, noop, ActionsItemType, ItemClickProps } from './interface'

import './style'

const prefixCls = 'cp-ui-action-sheet'
const queue: any[] = []
const defaultProps: ActionSheetProps = {
  closeOnClickModal: true,
  cancelText: '取消',
  actions: []
}
const closeActionSheet = () => {
  queue.forEach(q => q())
}
const renderCancelAcitionButton = (cancelText: string | React.ReactNode, onCancel?: noop) => {
  return (
    <a
      href="#"
      onClick={(e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        closeActionSheet()
        onCancel && onCancel(e)
      }}
    >
      {cancelText}
    </a>
  )
}
const onBodyActionItemClick = (item: ActionsItemType, key: string, onClick: ItemClickProps) => {
  closeActionSheet()
  onClick(key, item)
}
const renderBodyActionButtonSheet = ({ actions }: ActionSheetProps) => {
  return actions.map((item, index) => {
    const key = item.key === undefined ? `${index}` : item.key
    return (
      <div className={ClassNames(`${prefixCls}-select-choose-list`)} key={key}>
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            onBodyActionItemClick(item, key, item.onClick)
          }}
        >
          {item.content}
        </a>
      </div>
    )
  })
}
const getClassNames = () => {
  return ClassNames(prefixCls)
}
const onMark = (closeOnClickModal: boolean) => {
  if (!closeOnClickModal) {
    return
  }
  closeActionSheet()
}
const ActionSheet: React.SFC<ActionSheetProps> & {
  defaultProps: Partial<ActionSheetProps>
} = props => {
  const { cancelText, onCancel, closeOnClickModal } = props
  const classStr = getClassNames()
  return (
    <div
      className={classStr}
      onClick={() => {
        onMark(closeOnClickModal ?? true)
      }}
    >
      <div className={`${prefixCls}-container`}>
        <div className={`${prefixCls}-select-choose`}>{renderBodyActionButtonSheet(props)}</div>
        <div className={`${prefixCls}-select-chancel`}>
          {renderCancelAcitionButton(cancelText, onCancel)}
        </div>
      </div>
    </div>
  )
}

ActionSheet.defaultProps = defaultProps

const createActionSheet = (props: ActionSheetProps) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  queue.push(close)

  function close() {
    if (div) {
      ReactDOM.unmountComponentAtNode(div)
      if (div.parentNode) {
        div.parentNode.removeChild(div)
      }
      const index = queue.indexOf(close)
      if (index !== -1) {
        queue.splice(index, 1)
      }
    }
  }
  ReactDOM.render(<ActionSheet {...props} />, div)
}

export default {
  showActionSheetWithOptions(props: ActionSheetProps) {
    createActionSheet(props)
  },
  close: closeActionSheet
}
