var express = require('express');   
  	app = express();
    router = express.Router();  

var port = process.env.PORT || 8000;  
 
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/scripts', express.static(__dirname + '/scripts')); 
app.use('/projects/styles', express.static(__dirname + '/styles')); 
app.use('/projects/scripts', express.static(__dirname + '/scripts'));  
app.use('/projects/images', express.static(__dirname + '/images')); 

app.get('/' , function(req, res ){ 
    res.sendFile(__dirname + '/home.html');
});

app.get('/projects/leechesposter' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/leechesposter/index.html');
}); 

app.get('/projects/tva' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/tvapocalypse/index.html');
}); 

app.get('/projects/sccperformance' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/sccperformance/index.html');
}); 

app.get('/projects/leeches' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/leeches/index.html');
}); 
 
app.get('/develop' , function(req, res ){ 
    res.sendFile(__dirname + '/home.html');
}); 

app.get('/design' , function(req, res ){ 
    res.sendFile(__dirname + '/home.html');
}); 

console.log("running");

app.listen(port);