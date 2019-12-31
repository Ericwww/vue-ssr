var vueRouter= require('vue-router');
var Vue = require('vue');

Vue.use(vueRouter);

module.exports = ()=>{
  return new vueRouter({
    mode:'history',
    routes:[
      {
        path:'/',
        name:'home',
        component:{
          template:`<div>this is index</div>`
        }
      },
      {
        path:'/about',
        name:'about',
        component:{
          template:`<div>this is about</div>`
        }
      }
    ]
  })
}

