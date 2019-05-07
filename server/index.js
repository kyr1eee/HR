import Koa from 'koa';
import Axios from 'axios';
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
import post from './interface/discuss'
import jobmanage from './interface/job-manage'
//import company from './interface/company'

const app = new Koa()

app.use(bodyParser({
  extendTypes: ['json', 'form', 'text']
}))
app.use(json())

const connection = require('./dbs/index')
connection.connect()

const dbconfig = require('./dbs/config')
// dbconfig.connect()

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  //app.use(company.routes()).use(company.allowedMethods())
  app.use(post.routes()).use(post.allowedMethods())
  app.use(jobmanage.routes()).use(jobmanage.allowedMethods())

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  });

  // app.get('api/discuss', function(req, res) {
  //   const url = 'http://stuer.ericwu.cn/api/posts?pageIndex=1&pageSize=15&type=1';
  //   Axios.get(url).then(res => {
  //     console.log('Get Discuss: ', res);
  //   }).catch(e => {
  //     console.error('Get Discuss Failed: ',e);
  //   });
  // });

  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
