/**
 * 在 package.json 文件中 加入
 * "mock": "node mock/server.js",
   // "mockdev": "npm run mock & npm run dev"
 这样 就能在项目启动 时候 加载 server.js 文件
 *
 * */

const jsonServer = require('json-server')
const server = jsonServer.create()

// Support middleware
const middleware = jsonServer.defaults()
server.use(middleware)

// Add this before server.use(router) 注意：rewriter 的设置一定要在 router 设置之前
server.use(jsonServer.rewriter({
  // '/projects/:id/environments/:env_id/configs': '/environments/:env_id/configs',
  // '/projects/:id/environments/:env_id/latest_git_log': '/environments/:env_id/latest_git_log',
  // '/dashboard/weekly_data': '/weekly_data'
  // '/geta_prov': '/a_prov'
}))

// 支持加载多个db文件
const _ = require('underscore')
const path = require('path')
const fs = require('fs')
const mockDir = path.join(__dirname, 'data') // sos 这里指定 在mock目录下的 data文件夹下的所有 json文件
const base = {}
const files = fs.readdirSync(mockDir)
files.forEach((file) => {
  _.extend(base, require(path.resolve(mockDir, file)))
})
const router = jsonServer.router(base)



server.use(router)

// 返回自定义格式数据
// router.render = (req, res) => {
//   let data = {}
//   let blackList = ['/dashboard', '/dashboard/weekly_data']
//   let localData = res.locals.data
//   if (localData instanceof Array && !blackList.includes(req.originalUrl)) {
//     data = {
//       list: localData,
//       total: 20
//     }
//   } else {
//     data = localData
//   }
//   res.jsonp({
//     data: data,
//     status: 0,
//     message: ''
//   })
// }

server.listen(9090, () => {  console.log('JSON Server is running') }) // 监听 9090 端口 是否启动
// server.listen(8080, () => {  console.log('JSON Server is running') }) // 监听  端口 是否启动


