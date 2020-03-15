let uid = Date.now()

export const getUid = () => {
  uid +=1
  return uid
}

export const getUidString = () => {
  return getUid().toString(36)
}