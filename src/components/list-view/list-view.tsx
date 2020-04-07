import * as React from 'react'
import { ListViewProps, PullDownRefreshProps } from './interface'
import './style'
import Icon from '../icon'
const { useState, useRef, useEffect } = React
const timeout = (delay: number) => new Promise(resolve => setTimeout(resolve, delay))
interface ScrollHandleProps {
  listViewStatusRefs: React.MutableRefObject<{
    scrollTop: number
    touchX: number
    touchY: number
    time: number
    type: string
    pullDownDoneBacking: boolean
  }>
  pullUpStatus: number
  pullUpHide: boolean
  setPullUpStatus: React.Dispatch<React.SetStateAction<number>>
}
interface TouchStartHandleProps {
  wrapperElRef: React.MutableRefObject<HTMLDivElement | null>
  setMove: React.Dispatch<React.SetStateAction<boolean>>
  listViewStatusRefs: React.MutableRefObject<{
    scrollTop: number
    touchX: number
    touchY: number
    time: number
    type: string
    pullDownDoneBacking: boolean
  }>
}
interface TouchMoveHandleProps {
  move: boolean
  listViewStatusRefs: React.MutableRefObject<{
    scrollTop: number
    touchX: number
    touchY: number
    time: number
    type: string
    pullDownDoneBacking: boolean
  }>
  pullUpHide: boolean
  setMove: React.Dispatch<React.SetStateAction<boolean>>
  setTranslateY: React.Dispatch<React.SetStateAction<number>>
}

const defaultProps = {
  noMore: false,
  backTop: false,
  noMoreTip: '我是有底线的'
}
interface TouchEndHandleProps {
  setTranslateY: React.Dispatch<React.SetStateAction<number>>
  setMove: React.Dispatch<React.SetStateAction<boolean>>
  listViewStatusRefs: React.MutableRefObject<{
    scrollTop: number
    touchX: number
    touchY: number
    time: number
    type: string
    pullDownDoneBacking: boolean
  }>
  move: boolean
  translateY: number
  pullUpHide: boolean
  pullDownStatus: number
  pullUpStatus: number
  setPullUpStatus: React.Dispatch<React.SetStateAction<number>>
  setPullDownStatus: React.Dispatch<React.SetStateAction<number>>
}
const scrollHandle = (
  e: any,
  props: ListViewProps,
  { listViewStatusRefs, pullUpStatus, pullUpHide, setPullUpStatus }: ScrollHandleProps
) => {
  const { pullUpLoad, noMore } = props
  const target = e.target as HTMLDivElement
  //获取滚动距离，滚动方向，距底部距离
  const direction = target.scrollTop > listViewStatusRefs.current.scrollTop ? 'up' : 'down'
  listViewStatusRefs.current.scrollTop = target.scrollTop
  const scrollBottom = target.scrollHeight - target.scrollTop - target.clientHeight
  /*
   * 距底部距离小于10且是向上滚动
   * 开启了上拉加载 且 未隐藏底部提示 且 还有更多数据 且 不是正在加载中
   * 触发上拉加载
   * */
  if (scrollBottom < 10 && direction === 'up') {
    if (pullUpLoad && !pullUpHide && !noMore && pullUpStatus !== 1) {
      _pullUpLoad(props, setPullUpStatus)
    }
  }
}

const touchStartHandle = (
  e: React.TouchEvent<HTMLDivElement>,
  { wrapperElRef, setMove, listViewStatusRefs }: TouchStartHandleProps
) => {
  if (e.touches.length > 1) return
  const touch = e.touches[0]
  //在页面顶部和底部时才 开启拉动动效
  if (
    wrapperElRef.current &&
    (wrapperElRef.current.scrollTop <= 0 ||
      wrapperElRef.current.scrollHeight ===
        wrapperElRef.current.scrollTop + wrapperElRef.current.clientHeight)
  ) {
    setMove(true)
    listViewStatusRefs.current.touchX = touch.clientX
    listViewStatusRefs.current.touchY = touch.clientY
    listViewStatusRefs.current.time = new Date().getTime()
    if (wrapperElRef.current.scrollTop <= 0) {
      //顶部拉动时，判定为下拉刷新模式
      listViewStatusRefs.current.type = 'pullDown'
    } else {
      //底部拉动时,判定为上拉加载模式
      listViewStatusRefs.current.type = 'pullUp'
    }
  } else {
    //关闭拉动动效
    setMove(false)
  }
}

const touchMoveHandle = (
  e: any,
  props: ListViewProps,
  { move, listViewStatusRefs, pullUpHide, setMove, setTranslateY }: TouchMoveHandleProps
) => {
  if (e.touches.length > 1 || !move) return
  const { pullDownRefresh, pullUpLoad } = props
  //获取拉动偏移量
  const touch = e.touches[0]
  const moveX = touch.clientX - listViewStatusRefs.current.touchX
  const moveY = touch.clientY - listViewStatusRefs.current.touchY

  // 下拉刷新模式下，Y轴偏移量为负（上拉）,或未开启下拉刷新时，返回
  if (listViewStatusRefs.current.type === 'pullDown' && (moveY < 0 || !pullDownRefresh)) return
  //上拉加载模式下，Y轴偏移量为正（下拉），或未开启上拉加载时，返回
  if (listViewStatusRefs.current.type === 'pullUp' && (moveY > 0 || !pullUpLoad || pullUpHide))
    return

  /*
   * 在20毫秒内 X轴偏移量/Y轴偏移量 > 0.8 ,则判定用户在进行横向滑动，而不是纵向滑动
   * 此时拉动动效，初始化各变量
   * */
  if (new Date().getTime() - listViewStatusRefs.current.time < 20) {
    if (Math.abs(moveX / moveY) > 0.8) {
      listViewStatusRefs.current.touchX = 0
      listViewStatusRefs.current.touchY = 0
      listViewStatusRefs.current.time = 0
      move = false
      setMove(false)
    }
  } else {
    /*
     * 否则判定为进行纵向滑动，
     * 页面跟随滑动距离为手指移动距离的 0.3 倍
     * */
    setTranslateY(moveY * 0.3)
  }
}

const touchEndHandle = (
  e: React.TouchEvent<HTMLDivElement>,
  props: ListViewProps,
  {
    listViewStatusRefs,
    move,
    translateY,
    pullUpHide,
    pullDownStatus,
    pullUpStatus,
    setTranslateY,
    setMove,
    setPullUpStatus,
    setPullDownStatus
  }: TouchEndHandleProps
) => {
  if (!move) return
  const touch = e.changedTouches[0]
  const moveY = touch.clientY - listViewStatusRefs.current.touchY
  //手指抬起时Y轴偏移量为0则不判定为在进行滑动，返回
  if (moveY === 0) return
  //重置各变量
  listViewStatusRefs.current.touchX = 0
  listViewStatusRefs.current.touchY = 0
  listViewStatusRefs.current.time = 0
  move = false

  const { pullDownRefresh, pullUpLoad, noMore } = props

  if (listViewStatusRefs.current.type === 'pullDown') {
    /*
     * 手抬起时下拉刷新不是未开始状态下时
     * 拉动量赋值回40或0并返回
     * */
    if (pullDownStatus !== 0) {
      setTranslateY(listViewStatusRefs.current.pullDownDoneBacking ? 0 : 40)

      return
    }
    //未开启下拉刷新 或者 拉动量小于 40 （达不到下拉刷新要求拉动量）时，回弹。
    if (!pullDownRefresh || translateY <= 40) {
      setMove(false)
      setTranslateY(0)
    } else {
      //否则判定为成功触发下拉刷新
      _pullDownRefresh(props, { setMove, setTranslateY, setPullDownStatus, listViewStatusRefs })
    }
  } else if (listViewStatusRefs.current.type === 'pullUp') {
    //回弹
    setMove(false)
    setTranslateY(0)

    /*
     * 开启了上拉加载 且 未隐藏底部提示 且 还有更多数据 且 不是正在加载中 且 Y轴偏移量小于0（是在上拉）
     * 触发上拉加载
     * */
    if (pullUpLoad && !pullUpHide && !noMore && pullUpStatus !== 1 && moveY < 0) {
      _pullUpLoad(props, setPullUpStatus)
    }
  }
  listViewStatusRefs.current.type = ''
}

/*
 * 可在父组件中通过ref调用该方法，传入自定义异步函数组件会根据异步函数的状态去处理下拉的状态，自动下拉刷新
 * */
//下拉刷新
const _pullDownRefresh = async (
  props: ListViewProps,
  { setMove, setTranslateY, setPullDownStatus, listViewStatusRefs }: PullDownRefreshProps
) => {
  const { pullDownRefresh } = props
  let customAsyncFn
  if (!customAsyncFn) {
    if (!pullDownRefresh) return
    customAsyncFn = pullDownRefresh
  } else {
    //主动触发时至少加载300ms
    const fn: () => void = customAsyncFn
    customAsyncFn = () => Promise.all([fn(), timeout(300)])
  }
  setMove(false)
  setTranslateY(40)
  setPullDownStatus(1)
  try {
    await customAsyncFn()
    setPullDownStatus(2)
  } catch (e) {
    setPullDownStatus(3)
  }
  await timeout(500)
  setTranslateY(0)
  listViewStatusRefs.current.pullDownDoneBacking = true
  await timeout(300)
  setPullDownStatus(0)
  listViewStatusRefs.current.pullDownDoneBacking = false
}

//上拉加载
const _pullUpLoad = async (
  props: ListViewProps,
  setPullUpStatus: React.Dispatch<React.SetStateAction<number>>
) => {
  const { pullUpLoad = () => {} } = props
  setPullUpStatus(1)
  try {
    await pullUpLoad()
    setPullUpStatus(2)
  } catch (e) {
    setPullUpStatus(3)
  }
}

const ListView: React.SFC<ListViewProps> & { defaultProps: Partial<ListViewProps> } = props => {
  const [translateY, setTranslateY] = useState(0)
  const [move, setMove] = useState(false)
  const [pullUpHide, setPullUpHide] = useState(true)
  const [pullDownStatus, setPullDownStatus] = useState(0)
  const [pullUpStatus, setPullUpStatus] = useState(0)
  const listViewStatusRefs = useRef({
    scrollTop: 0,
    touchX: 0,
    touchY: 0,
    time: 0,
    type: '',
    pullDownDoneBacking: false //下拉刷新完成后，正在回弹至初始位置的状态。 ps:解决一直重复下拉时的bug
  })
  const innerElRef = useRef<HTMLDivElement | null>(null)
  const wrapperElRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    //内容发生变化时重新计算 pullUpHide
    if (innerElRef.current && wrapperElRef.current) {
      const pullUpHide = innerElRef.current.clientHeight < wrapperElRef.current.clientHeight
      setPullUpHide(pullUpHide)
    }
  }, [props.children])

  useEffect(() => {
    if (!wrapperElRef.current) return
    wrapperElRef.current.addEventListener('scroll', _onSrcoll, false)
    return () => {
      if (!wrapperElRef.current) return
      wrapperElRef.current.removeEventListener('scroll', _onSrcoll)
    }
  }, [wrapperElRef.current])
  const _onSrcoll = (e: any) => {
    scrollHandle(e, props, { listViewStatusRefs, pullUpStatus, pullUpHide, setPullUpStatus })
  }
  const { pullDownRefresh, pullUpLoad, children, noMore, noMoreTip } = props

  return (
    <React.Fragment>
      <div
        className={'wrapper'}
        ref={wrapperElRef}
        onTouchStart={e => {
          touchStartHandle(e, { wrapperElRef, setMove, listViewStatusRefs })
        }}
        onTouchMove={e => {
          touchMoveHandle(e, props, {
            move,
            listViewStatusRefs,
            pullUpHide,
            setMove,
            setTranslateY
          })
        }}
        onTouchEnd={e => {
          touchEndHandle(e, props, {
            listViewStatusRefs,
            move,
            translateY,
            pullUpHide,
            pullDownStatus,
            pullUpStatus,
            setTranslateY,
            setMove,
            setPullUpStatus,
            setPullDownStatus
          })
        }}
        onScroll={e => {
          scrollHandle(e, props, { listViewStatusRefs, pullUpStatus, pullUpHide, setPullUpStatus })
        }}
      >
        <div
          style={{
            transform: `translateY(${translateY}px)`,
            transition: move ? '' : 'transform .3s ease'
          }}
        >
          {pullDownRefresh && (
            <div className="pullDownTip">
              {pullDownStatus !== 0 ? (
                <div>
                  {pullDownStatus === 1 && <Icon type="spinner" spin size={18} />}
                  {pullDownStatus === 2 && <Icon type={'check-circle'} size={18} />}
                  {pullDownStatus === 3 && <Icon type={'times-circle'} size={18} />}
                  <span>
                    {pullDownStatus === 1 && '正在刷新'}
                    {pullDownStatus === 2 && '刷新成功'}
                    {pullDownStatus === 3 && '刷新失败'}
                  </span>
                </div>
              ) : (
                <div>
                  <Icon type="arrow-down" size={18} />
                  <span>{translateY > 60 ? '释放' : '下拉'}刷新</span>
                </div>
              )}
            </div>
          )}
          <div ref={innerElRef}>{children}</div>
          {!pullUpHide && pullUpLoad && (
            <div className="pullUpTip">
              {noMore ? (
                noMoreTip
              ) : pullUpStatus === 0 || pullUpStatus === 1 ? (
                <div>
                  <Icon type="spinner" spin size={18} />
                  <span>加载中</span>
                </div>
              ) : pullUpStatus === 2 ? (
                <div>
                  <Icon type={'check-circle'} size={18} />
                  <span>加载成功</span>
                </div>
              ) : pullUpStatus === 3 ? (
                <div>
                  <Icon type={'times-circle'} size={18} />
                  <span>加载失败</span>
                </div>
              ) : (
                ''
              )}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}
ListView.defaultProps = defaultProps

export default ListView
