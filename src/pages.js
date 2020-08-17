module.exports = (pagesJson, loader) => {
  // 需要将loader 传入作为初始化，
  const hotRequire = require('uni-pages-hot-modules')(loader)
  return {
    "easycom": {
      "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
    },
    "pages": [
      ...hotRequire('./pages-router/main-package.js')
    ],
    "subPackages": [
      ...hotRequire('./pages-router/sub-package.js')
    ],
    
    "tabBar": {
        "color": "#A3A1A1",
        "selectedColor": "#25d3d3",
        "backgroundColor": "#fff",
        "borderStyle": "black",
        "list": [
            {
                "pagePath": "pages/home/index",
                "text": "商城",
            },
            {
                "pagePath": "pages/person/index",
                "text": "个人中心",
            }
        ]
    }

  }
}