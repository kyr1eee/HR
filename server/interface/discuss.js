import Router from 'koa-router'
//import axios from './axios'
const sql = require('../dbs/index')
//import {posts} from '../api/index'

let router = new Router({
  prefix: '/api'
})

router.get('/discuss', async (ctx) => {
  let res=await new Promise((resolve,reject)=>{
    sql.query('select * from posts where type = 1', (error,result,filed)=>{
        if (error) return error;
        resolve(result)
    })
  })
  ctx.response.body={status:200,msg:'操作成功',data:res}
})

router.post('/submit', async (ctx) => {
  let params = ctx.request.body
  let res=await new Promise((resolve,reject)=>{
    sql.query('insert into posts(userId,title,content,type) values(?,?,?,?)',[params.userId,params.title,params.content,params.type],(error,result,filed)=>{
        if (error) return error;
        resolve(result)
    })
  })
  ctx.response.body={status:200,msg:'操作成功',data:res}
})

// router.post('/submit', async (ctx) => {
//   let params = ctx.request.body
//   const po = {
//     title: params.title,
//     content: params.content,
//     type: params.type,
//     tags: []
//   }
//   const data = await posts(po)
//   ctx.response.body={status:200,msg:'操作成功',data:data}
// })

export default router
