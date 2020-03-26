import classnames from 'classnames'
import * as React from 'react'
import Notification from 'rmc-notification'
import Icon from '../icon'
import './style/index.scss'
const SHORT = 3

interface IToastConfig {
  duration: number
  mask: boolean
}
const config: IToastConfig = {
  duration: SHORT,
  mask: true
}
enum toastType {
  success = 'success',
  fail = 'fail',
  info = 'info',
  loading = 'loading',
  offline = 'offline'
}
let messageInstance: any
let messageNeedHide: boolean
const prefixCls = 'cp-ui-toast'

function getMessageInstance(mask: boolean, callback: (notification: any) => void) {
  return Notification.newInstance(
    {
      prefixCls,
      style: {}, // clear rmc-notification default style
      transitionName: 'cp-ui-fade',
      className: classnames({
        [`${prefixCls}-mask`]: mask,
        [`${prefixCls}-nomask`]: !mask
      })
    },
    (notification: any) => callback && callback(notification)
  )
}

function notice(
  content: React.ReactNode,
  type: string,
  duration = config.duration,
  onClose: (() => void) | undefined | null,
  mask = config.mask
) {
  const iconTypes: { [key: string]: string } = {
    info: '',
    success: 'check-circle-o',
    fail: 'close',
    offline: 'meh-o',
    loading: 'circle-o-notch'
  }
  const iconType = iconTypes[type]
  messageNeedHide = false
  getMessageInstance(mask, notification => {
    if (!notification) {
      return
    }

    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }

    if (messageNeedHide) {
      notification.destroy()
      messageNeedHide = false
      return
    }

    messageInstance = notification

    notification.notice({
      duration,
      style: {},
      content: !!iconType ? (
        <div
          className={`${prefixCls}-text ${prefixCls}-text-icon`}
          role="alert"
          aria-live="assertive"
        >
          <Icon type={iconType} size="32px" spin={type === 'loading'} />
          <div className={`${prefixCls}-text-info`}>{content}</div>
        </div>
      ) : (
        <div className={`${prefixCls}-text`} role="alert" aria-live="assertive">
          <div>{content}</div>
        </div>
      ),
      closable: true,
      onClose() {
        if (onClose) {
          onClose()
        }
        notification.destroy()
        notification = null
        messageInstance = null
      }
    })
  })
}

export default {
  SHORT,
  LONG: 8,
  show(content: React.ReactNode, duration?: number, mask?: boolean) {
    return notice(content, toastType.info, duration, () => {}, mask)
  },
  info(content: React.ReactNode, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, toastType.info, duration, onClose, mask)
  },
  success(content: React.ReactNode, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, toastType.success, duration, onClose, mask)
  },
  fail(content: React.ReactNode, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, toastType.fail, duration, onClose, mask)
  },
  offline(content: React.ReactNode, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, toastType.offline, duration, onClose, mask)
  },
  loading(content: React.ReactNode, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, toastType.loading, duration, onClose, mask)
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    } else {
      messageNeedHide = true
    }
  },
  config(conf: Partial<IToastConfig> = {}) {
    const { duration = SHORT, mask } = conf
    config.duration = duration
    if (mask === false) {
      config.mask = false
    }
  }
}
