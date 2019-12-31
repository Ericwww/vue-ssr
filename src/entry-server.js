const createApp = require('./app.js');


module.exports=(context)=>{
  return new Promise((resolve,reject)=>{
    let {app,router} =createApp(context);
    router.push(context.url);
    router.onReady(()=>{
      let matchedComponents=router.getMatchedComponents();
      if(!matchedComponents.length){
        return reject({code:404})
      }
      resolve(app);
    },reject)
  })
}