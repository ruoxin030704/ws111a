import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("bobo.db")
const app = new Application()
const router = new Router()

router.get('/', main)
.get('/sqlcmd/:cmd', sql)
.get('/public/(.*)', pub)

app.use(router.routes())
app.use(router.allowedMethods())

async function main(ctx){
    ctx.response.redirect('/public/')
}

async function pub(ctx){
    console.log(ctx.request.url.pathname)
    await send(ctx, ctx.request.url.pathname,{
        root:`${Deno.cwd()}/`,
        index:"index.html",
    })
}

async function sql(ctx){
    let cmd = ctx.params['cmd']
    console.log(cmd)
    let result = db.query(cmd)
    console.log(result)
    ctx.response.type='application/json'
    ctx.response.body = result
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 })