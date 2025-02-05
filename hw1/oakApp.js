import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

function page(body) {
  return `<html>
  <head>
  <style>
  </style>
  </head>
  <body>
  ${body}
  </body>
  </html>`
}

app.use((ctx) => {
  console.log('ctx.request.url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname.startsWith("/login")) {
    ctx.response.body = page(`
       <form action="" method="post">
       <h1>登入</h1>
         <input type="text" name="user" value="" placeholder="User Name"/>
         <input type="password" name="password" value="" placeholder="Password"/>
         <button onclick="document.location='http://127.0.0.1:8000'">Submit</button>
       </form>
    `)
  } else {
    ctx.response.body = page(`
    <h1>
    <a href="http://127.0.0.1:8000/login">進入登入頁面</a>
    </h1>
    `)
  }
  // searchParams.get('name')=${ctx.request.url.searchParams.get('name')}
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });