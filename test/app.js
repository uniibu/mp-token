var mp = require('../');

// will throw an error
var args = {
    app_id:1091,
    session_id:'be345ef0-7218-4757-8a47-55e8eaf6a956'
}
mp(args,function(error,resp){
    if(error){
        throw (error);

    }
    console.log(resp)
})
