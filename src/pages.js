module.exports = (pagesJson, loader) => {
  // 需要将loader 传入作为初始化，
  const hotRequire = require('uni-pages-hot-modules')(loader)
  return {
    "pages": [
      ...hotRequire('./pages-router/main-package.js')
    ],
    "subPackages": [
      ...hotRequire('./pages-router/sub-package.js')
    ]
  }
}