var express = require('express');
var app = express();
//var useragent = require('express-useragent');

//app.use(useragent.express());

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(200);
});

app.get("/", function(req, res){
   var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
   var language = req.acceptsLanguages();
   var os = req.headers['user-agent'];
   var regExp = /\(([^)]+)\)/;
   var matches = regExp.exec(os);
   var results = {
       ipaddress: ip,
       language: language[0],
       software: matches[1]
   }
   console.log(JSON.stringify(results));
    res.send(JSON.stringify(results));
});
app.listen(process.env.PORT, function(){
   console.log("Starting"); 
}); 
