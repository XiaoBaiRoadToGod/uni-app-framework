// import modules from './modules'
import Vue from 'vue'
import Router from 'uni-simple-router'

Vue.use( Router )
// 初始化
// console.log(modules)
// eslint-disable-next-line
// console.log([...ROUTES])
const router = new Router( {
  encodeURI: false,
  // eslint-disable-next-line
  routes: [...ROUTES] // 路由表
} )
// 全局路由前置守卫
// let flag = false
router.beforeEach( ( to, from, next ) => {
  // console.log('路由守卫--前置')
  // console.log(to)
  // next(to.aliasPath || to.path)
  // flag = false
  // if(!flag && to.aliasPath && to.aliasPath !== '/') {
  //   next({
  //     path: to.aliasPath,
  //     NAVTYPE: 'replace'
  //   })
  //   flag = true
  // } else {
  next()
  // }
} )
// 全局路由后置守卫
// eslint-disable-next-line
router.afterEach((to, from) => {

} )

export default router
