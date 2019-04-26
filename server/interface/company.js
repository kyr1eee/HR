import Router from 'koa-router'
import axios from './axios'
const sql = require('../dbs/index')

let router = new Router({
  prefix: '/company'
})

router.post('/submit', async (ctx) => {
  let params = ctx.request.body
  let res=await new Promise((resolve,reject)=>{
    sql.query('insert into companies(name,info) values(?,?)',[params.name,params.desc],(error,result,filed)=>{
        if (error) return error;
        resolve(result)
    })
  })
  ctx.response.body={status:1,msg:'操作成功',data:res}
})

export default router
