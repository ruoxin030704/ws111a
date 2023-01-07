export function layout(title, content) 
{
    return `
    <html>
      <head>
       <meta charest="utf-8>

      <style>
        body 
        {
          padding: 80px;
          font: 16px Helvetica, Arial;
        }
    
        h1 
        {
          font-size: 2em;
        }
    
        h2
        {
          font-size: 1.2em;
        }
    
        #posts 
        {
          margin: 0;
          padding: 0;
        }
    
        #posts li 
        {
          margin: 40px 0;
          padding: 0;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
          list-style: none;
        }
    
        #posts li:last-child 
        {
          border-bottom: none;
        }
    
        textarea 
        {
          width: 500px;
          height: 300px;
        }
    
        input[type=text],textarea 
        {
          border: 1px solid #eee;
          border-top-color: #ddd;
          border-left-color: #ddd;
          border-radius: 2px;
          padding: 15px;
          font-size: .8em;
        }
    
        input[type=text] 
        {
          width: 500px;
        }
      </style>
    </head>

    <body>
      <section id="content">
        ${content}
      </section>
    </body>
    </html>
    `
  }
  
  export function list(posts) 
  {
    let list = []
    for (let post of posts) 
    {
      list.push(`
      <li>
        <h2>${ post.title }</h2>
        <p><a href="/post/${post.id}">Read post</a></p>
        <p><a href="/remove/${post.body}">Delete note</a></p>
      </li>
      `)
    }
    let content = `
    <h1>NOTES</h1>
    <p>you have<strong>${posts.length}</strong>notes</p>
    <p><a href="/post/new">Creat a Note</a></p>
    <ul id="posts">
      ${list.join('\n')}
    </ul>
    `
    return layout('Posts', content)
  }
  
  export function newPost() {
    return layout('New Post', `
    <h1>New Note</h1>
    <p>Create a new note.</p>
    <form action="/post" method="post">
      <p><input type="text" placeholder="Title" name="title"></p>
      <p><input type="date" name="date"></p>
      <p><textarea placeholder="Contents" name="body"></textarea></p>
      <p><input type="submit" value="Create"></p>
    </form>
    `)
  }
  
  export function show(post) {
    return layout(post.title, `
      <h1>${post.title}</h1>
      <p>${post .date}</p>
      <p>${post.body}</p>
    `)
  }
  