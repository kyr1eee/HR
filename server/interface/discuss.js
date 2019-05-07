import Router from 'koa-router'
//import axios from './axios'
const sql = require('../dbs/index')

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

export default router
