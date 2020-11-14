// 自动注册分包路由

const requireContext = require('../../utils/require-context')
const path = require('path')
const files = requireContext(path.join(__dirname, './'), true, /\.js$/)
// 不能使用webpack 的require.context
// const files = require.context('.', false, /\.js$/)
const routes = []
files.keys().forEach(key => {
  if (key.startsWith('index')) return
  const item = files(key)
  // 不知道为什么concat 用不了
  // routes = routes.concat(item)
  for (const i of item) {
    routes.push(i)
  }
})

module.exports = routes
