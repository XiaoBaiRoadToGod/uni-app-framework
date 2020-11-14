const demoList = [{
  id: 1,
  name: 'zs',
  age: '23',
  job: '前端工程师'
}, {
  id: 2,
  name: 'ww',
  age: '24',
  job: '后端工程师'
}]
const demoData2 = {
  status: 200,
  message: 'success',
  data: {
    code: 1,
    total: 100,
    'rows|10': [{
      id: '@guid',
      name: '@cname',
      'age|20-30': 23,
      'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
    }]
  }
}

export default {
  'get|/data/lists1': option => {
    console.log(option)
    // 可以在这个地方对demoList2进行一系列操作，例如增删改
    // option 指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性
    return {
      status: 200,
      message: 'success',
      data: demoList
    }
  },
  'get|/data/lists2': demoData2
}
