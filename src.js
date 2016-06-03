'use strict';
const https = require('https');
const url = require('url');
function cb(error,resp){
    if(error)return error;
    return resp;
}
function getToken(args,cb){
var options = {
    hostname: 'www.moneypot.com',
    port: 443,
    path: '/oauth/authorize?app_id='+args.app_id+'&response_type=token&redirect_uri=https://www.moneypot.com/oauth/debug',
    method: 'GET',
    headers:{
        'cookie':'sessionId='+args.session_id
    }
};
https.get(options, function(res){
if(res.statusCode !== 302){ cb({error:'unreachable'});}

    var headerLocation = url.parse(res.headers.location);
    var hash = headerLocation.hash;
    cb(null,QueryStringToJSON(hash));


}).on('error', function(e) {
     cb(onerror())
});

    }

function QueryStringToJSON(string) {
    try {
        var pairs = string.slice(1).split('&');
        var result = {};
        pairs.forEach(function (pair) {
            pair = pair.split('=');
            result[pair[0]] = decodeURIComponent(pair[1] || '');
        });
        return JSON.parse(JSON.stringify(result));
    }catch(err){
        return onerror();
    }
}
function onerror(){
    return '{error: Retrieval of token failed}'
}

module.exports = getToken;
