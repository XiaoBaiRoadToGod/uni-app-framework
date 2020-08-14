const home = [
  {
    // 注意path 必须跟pages.json中的地址对应，最前面别忘了加 / 
    path: '/pages/home/index',
    aliasPath: '/',
    name: 'home',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/pages/person/index',
    aliasPath: '/person',
    name: 'person',
    meta: {
      title: '我的'
    }
  }
]

export default home