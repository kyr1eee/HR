import Router from 'koa-router'
//import axios from './axios'
const sql = require('../dbs/config')

let router = new Router({
  prefix: '/api/company'
})

router.get('/message', async (ctx) => {
  let res=await new Promise((resolve,reject)=>{
    sql.query('select * from companies where id = 5', (error,result,filed)=>{
        if (error) return error;
        resolve(result)
    })
  })
  ctx.response.body={status:200,msg:'操作成功',data:res}
})

router.post('/submit', async (ctx) => {
  let params = ctx.request.body
  let res=await new Promise((resolve,reject)=>{
    sql.query('insert into companies(name,regNum,address,business,property,people,info,email,password) values(?,?,?,?,?,?,?,?,?)',[params.name,params.regNum,params.address,params.business,params.property,params.people,params.info,params.email,params.password],(error,result,filed)=>{
        if (error)
          console.log(error);
        resolve(result)
    })
  })
  ctx.response.body={status:200,msg:'操作成功',data:res}
})

router.post('/save', async (ctx) => {
  let params = ctx.request.body
  let res=await new Promise((resolve,reject)=>{
    sql.query('update companies(name,regNum,address,business,property,people,info) values(?,?,?,?,?,?,?) where id = 3',[params.name,params.regNum,params.address,params.business,params.property,params.people,params.info],(error,result,filed)=>{
        if (error)
          console.log(error)
        resolve(result)
    })
  })
  ctx.response.body={status:200,msg:'操作成功',data:res}
})

router.get('/infos', async (ctx) => {
  let res=await new Promise((resolve,reject)=>{
    sql.query('select * from posts where id = 3;', (error,result,filed)=>{
        if (error) return error;
        resolve(result)
    })
  })
  ctx.response.body={status:200,msg:'操作成功',data:res}
})

export default router
