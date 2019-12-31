const Vue = require('vue');
const createRouter = require('./router')

module.exports = (context)=>{
  const router = createRouter();
  const app=new Vue({
    router,
    data: {
      message: 'hello-ssr',
      url:context.url,
    },
    template: `
    <div>
      <h1>welcome to learn vue-ssr</h1>
      <router-link to="/">index</router-link>
      <router-link to="/about">about</router-link>
      <p>你好{{message}}</p>
      <p>The path you visit is:{{url}}</p>
      <router-view></router-view>
    </div>`
  });
  return {app,router}
}
