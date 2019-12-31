const express = require('express');
const app = express();
const path = require('path');
const vueServerRender = require('vue-server-renderer').createRenderer({
  template:require('fs').readFileSync(path.join(__dirname,'./index.html'),'utf-8')
});
const Vue = require('vue');




app.get('*', (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/html;charset=utf-8;');

  const vueApp = new Vue({
    data: {
      message: 'hello-ssr',
      url:req.url,
    },
    template: `
    <div>
      <h1>welcome to learn vue-ssr</h1>
      <p>你好{{message}}</p>
      <p>The path you visit is:{{url}}</p>
    </div>`
  })

  vueServerRender.renderToString(vueApp).then((html)=>{
    res.end(html);
  }).catch(err=>console.log(err))
});

app.listen(4000, () => {
  console.log('启动成功')
})