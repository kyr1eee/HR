import Router from 'koa-router'
//import axios from './axios'
const sql = require('../dbs/config')

let router = new Router({
  prefix: '/api/job-manage'
})

router.get('/findAll', async (ctx) => {
  let res=await new Promise((resolve,reject)=>{
    sql.query('select * from jobinfos;', (error,result,filed)=>{
        if (error)
          console.log(error)
        resolve(result)
    })
  })
  ctx.response.body={status:200,msg:'操作成功',data:res}
})

router.post('/submit', async (ctx) => {
  let params = ctx.request.body;
  console.log('提交', params);
  let res = await new Promise((resolve, reject) => {
    sql.query('insert into jobinfos(coId,name,place,salary,date,top,workfare,req) values(?,?,?,?,?,?,?,?);',[3,params.name,params.place,params.salary,params.date,params.top,params.workfare,params.req],(error,result,filed)=>{
      if (error)
        console.log('提交职位信息失败1:', error);
      resolve(result)
    })
  })
  ctx.response.body={status:200,msg:'操作成功',data:res}
})

export default router
