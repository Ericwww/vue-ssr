const express = require('express');
const app = express();
const vueServerRender = require('vue-server-renderer').createRenderer();
const Vue = require('vue');

const vueApp = new Vue({
  data: {
    message: 'hello-ssr',
  },
  template: `
  <div>
    <h1>welcome to learn vue-ssr</h1>
    <p>你好{{message}}</p>
  </div>`
})

app.get('*', (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/html;charset=utf-8;');

  vueServerRender.renderToString(vueApp).then((html)=>{
    res.end(`
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>vue-ssr</title>
    
    </head>
    <body>
      ${html}
    </body>
    </html>
    `);
  }).catch(err=>console.log(err))
});

app.listen(4000, () => {
  console.log('启动成功')
})