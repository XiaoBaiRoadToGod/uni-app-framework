
// 自动构建h5 路由
const TransformPages = require('uni-read-pages')
const tfPages = new TransformPages({
  includes: ['path', 'name', 'meta', 'redirect']
})


module.exports = {
  transpileDependencies:['uni-simple-router'],
  configureWebpack: {
    plugins: [
      // 自动构建H5 路由
      new tfPages.webpack.DefinePlugin({
        ROUTES: JSON.stringify(tfPages.routes)
      })
    ]
  }
}