import Koa from 'koa'
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
import mongoose from 'mongoose'
import bodyParser from 'koa-bodyParser'
import session from 'koa-generic-session'
import Redis from 'koa-redis';
import dbConfig from './dbs/config'
import passport from './interface/utils/passport'
import users from './interface/users'
// import 
const app = new Koa()
app.keys = ['mt','keyskeys'];
app.proxy = true
app.use(session({
  key:'mt',
  prefix:'mt:uid',
  store:new Redis(),
  cookie: {secure: false, maxAge:86400000}
}))
app.use(bodyParser({
  extendTypes:['json','form','text']
}))
mongoose.connect(dbConfig.dbs,{
  useNewUrlParser:true,
  useUnifiedTopology: true
})
app.use(passport.initialize())
app.use(passport.session())
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  await nuxt.ready()
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(users.routes()).use(users.allowedMethods())
  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
