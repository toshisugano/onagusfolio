var express = require('express');   
  	app = express();
    router = express.Router();   
  
var mainUrl = '//www.thesoogie.com/';   

var port = process.env.PORT || 8000;  
 
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/scripts', express.static(__dirname + '/scripts')); 

app.get('/' , function(req, res ){ 
    res.sendFile(__dirname + '/home.html');
});

app.get('/leechesposter' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/leechesposter/index.html');
}); 

console.log("running");

app.listen(port);