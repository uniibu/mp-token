# mp-token
Programmatically get a new access_token for moneypot.com

##Example
```javascript
var mp = require('mp-token');
var args = {
    app_id:1091, // the app id
    session_id:'be324ef0-7662-4757-8a47-15e2eaf6a951'
    //your unexpired moneypot.com sessionid you can get this from your browser cookies
}

mp(args,function(token){
    console.log(token); //will return a JSON Object {access_token:newToken,expires_in:expirationDate}
});
```
