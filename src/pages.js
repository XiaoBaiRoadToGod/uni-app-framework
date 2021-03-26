/*
 * @Author: Davidbieber
 * @Email: davidbieber@163.com
 * @Date: 2021-03-26 10:33:57
 * @Description: 
 */
module.exports = (pagesJson, loader) => {
  // 需要将loader 传入作为初始化，
  const hotRequire = require('uni-pages-hot-modules')(loader)
  return {
    'easycom': {
      '^u-(.*)': 'uview-ui/components/u-$1/u-$1.vue'
    },
    'pages': [
      ...hotRequire('./pages-router/main-package.js')
    ],
    'subPackages': [
      ...hotRequire('./pages-router/sub-package.js')
    ],
    'globalStyle': {
      'navigationStyle': 'custom'
    },

    'tabBar': {
      'color': '#A3A1A1',
      'selectedColor': '#25d3d3',
      'backgroundColor': '#fff',
      'borderStyle': 'black',
      'list': [
        {
          'pagePath': 'pages/home/index',
          'text': '主页'
        },
        {
          'pagePath': 'pages/person/index',
          'text': '我的'
        }
      ]
    }

  }
}
