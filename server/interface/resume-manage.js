import Router from 'koa-router'
//import axios from './axios'
const sql = require('../dbs/config')

let router = new Router({
  prefix: '/api/resume-manage'
})

router.get('/findAll', async (ctx) => {
  let res=await new Promise((resolve,reject)=>{
    sql.query('select * from resumes;', (error,result,filed)=>{
        if (error)
          console.log(error)
        resolve(result)
    })
  })
  ctx.response.body={status:200,msg:'操作成功',data:res}
})

router.post('/del', async (ctx) => {
  let params = ctx.request.body;
  let res=await new Promise((resolve,reject)=>{
    sql.query('delete from resumes where id = ?;',[params.id], (error,result,filed)=>{
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
    sql.query('insert into resumes(coId,userId,name,phone,email,major,graduate,favor,skill,work,item,intro,createdAt) values(?,?,?,?,?,?,?,?,?,?,?,?,Now());',
              [3,params.userId,params.name,params.phone,params.email,params.major,params.graduate,params.like,params.skill,params.work,params.item,params.intro],(error,result,filed)=>{
                if (error)
                  console.log(error);
                resolve(result)
    })
  })
  ctx.response.body={status:200,msg:'操作成功',data:res}
})

export default router
