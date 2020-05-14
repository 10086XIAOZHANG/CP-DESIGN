import { getUid, getUidString } from './guid'

const omit = (obj: any, arr: string[]) =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as any);

const compose = (...fns: any) => fns.reduce((f: any, g: any) => (...args: any) => f(g(...args)));

const getPrefixCls = (prefixCls: string, classStr: string) => {
  if (!classStr) return prefixCls
  return `${prefixCls}-${classStr}`
}

export {
  omit,
  compose,
  getPrefixCls,
  getUid,
  getUidString
}