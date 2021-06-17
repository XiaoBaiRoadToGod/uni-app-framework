/*
 * @Author: Davidbieber
 * @Email: davidbieber@163.com
 * @Date: 2021-03-31 13:50:04
 * @Description:
 */
const sessionKey = 'sessionId'
export const setSession = (data) => {
  return uni.setStorageSync(sessionKey, data)
}
export const getSession = () => {
  const session = uni.getStorageSync(sessionKey)
  if (session && session !== undefined) {
    return session
  }
  return null
}
export const removeSession = () => {
  return uni.removeStorageSync(sessionKey)
}
