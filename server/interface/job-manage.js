import Router from 'koa-router'
//import axios from './axios'
const sql = require('../dbs/config')

let router = new Router({
  prefix: '/job-manage'
})

router.get('/findAll', async (ctx) => {
  let res=await new Promise((resolve,reject)=>{
    sql.query('select * from jobinfos', (error,result,filed)=>{
        if (error) return error;
        resolve(result)
    })
  })
  ctx.response.body={status:200,msg:'操作成功',data:res}
})

router.get('/findOne', async (ctx) => {
  let res=await new Promise((resolve,reject)=>{
    sql.query('select * from jobinfos where id = 1', (error,result,filed)=>{
        if (error) return error;
        resolve(result)
    })
  })
  ctx.response.body={status:200,msg:'操作成功',data:res}
})

router.post('/submit', async (ctx) => {
  let params = ctx.request.body
  let res = await new Promise((resolve, reject) => {
    sql.query('insert into jobinfos(coId,name,place,salary,date,top,workfare,require) values(?,?,?,?,?,?,?,?)',[3,params.name,params.place,params.salary,params.date,params.top,params.workfare,params.require],(error,result,filed)=>{
      if (error) return error;
      resolve(result)
    })
  })
  ctx.response.body={status:200,msg:'操作成功',data:res}
})

export default router
