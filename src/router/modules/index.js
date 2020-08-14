
const files = require.context('.', false, /\.js$/)
const modules = []

files.keys().forEach(key => {
  console.log(key)
  if(key === './index.js') return 
  const item = files(key).default 
  console.log(item)
  modules.push(...item)
})

export default modules