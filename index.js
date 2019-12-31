const express = require('express');
const app = express();
const path = require('path');
const vueServerRender = require('vue-server-renderer').createRenderer({
  template:require('fs').readFileSync(path.join(__dirname,'./index.html'),'utf-8')
});
const Vue = require('vue');
const vueApp = require('./src/entry-server.js');

app.get('*', async (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/html;charset=utf-8;');

  let app = await vueApp({url:req.url});

  

  vueServerRender.renderToString(app).then((html)=>{
    res.end(html);
  }).catch(err=>console.log(err))
});

app.listen(4000, () => {
  console.log('启动成功')
})