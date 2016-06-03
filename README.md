# mp-token
Programmatically get a new access_token for moneypot.com

##Example
```javascript
var mp = require('mp-token');
var args = {
    app_id:1091,
    session_id:'be324ef0-7662-4757-8a47-15e2eaf6a951'
}

mp(args,function(token){
    console.log(token);
});
```
