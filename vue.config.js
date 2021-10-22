const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 自动构建h5 路由
const TransformPages = require('uni-read-pages')
const tfPages = new TransformPages({
  includes: ['path', 'name', 'meta', 'redirect']
})

module.exports = {
  transpileDependencies: ['uni-simple-router'],
  configureWebpack: {
    plugins: [
      // 自动构建H5 路由
      new tfPages.webpack.DefinePlugin({
        ROUTES: JSON.stringify(tfPages.routes)
      }),

      // 分包优化 图片
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, '/subpackageStatic'),
          to: path.join(__dirname, '/dist/', process.env.NODE_ENV === 'production' ? 'build' : 'dev', process.env.UNI_PLATFORM, '/')
        }
      ])
    ]
  },
  chainWebpack: (config) => {
    // 发行或运行时启用了压缩时会生效
    config.optimization.minimizer('terser').tap((args) => {
      const compress = args[0].terserOptions.compress
      // 非 App 平台移除 console 代码(包含所有 console 方法，如 log,debug,info...)
      compress.drop_console = true
      compress.pure_funcs = [
        '__f__' // App 平台 vue 移除日志代码
        // 'console.debug' // 可移除指定的 console 方法
      ]
      return args
    })
  }
}
