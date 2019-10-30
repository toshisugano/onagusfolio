const express = require('express');   
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session'); 
const keys = require('./config/keys'); 

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, () => {
    console.log('MongoDB connected');
});

require('./models/user'); 
require('./services/passport'); 
require('./routes/auth')(app);  

const port = process.env.PORT || 8000;  
 
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/scripts', express.static(__dirname + '/scripts')); 
app.use('/login/styles', express.static(__dirname + '/styles'));
app.use('/login/scripts', express.static(__dirname + '/scripts'));
app.use('/login/images', express.static(__dirname + '/images'));
app.use('/projects/styles', express.static(__dirname + '/styles')); 
app.use('/projects/scripts', express.static(__dirname + '/scripts'));  
app.use('/projects/images', express.static(__dirname + '/images')); 

app.get('/' , function(req, res ){ 
    res.sendFile(__dirname + '/home.html');
});

//Projects
app.get('/projects/leechesposter' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/leechesposter/index.html');
}); 

app.get('/projects/tva' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/tvapocalypse/index.html');
}); 

app.get('/projects/sccperformance' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/sccperformance/index.html');
}); 

app.get('/projects/sccperformancesite' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/sccperformancesite/index.html');
});  

app.get('/projects/leeches' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/leeches/index.html');
});  

app.get('/projects/znalytics_1' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/znalytics_1/index.html');
});  

app.get('/projects/znalytics_2' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/znalytics_2/index.html');
});  

//Develop 
app.get('/develop' , function(req, res ){ 
    res.sendFile(__dirname + '/dev.html');
}); 

//Design
app.get('/design' , function(req, res ){ 
    res.sendFile(__dirname + '/home.html');
}); 

// Login 
app.get('/login/user', (req, res) => { 
    res.sendFile(__dirname + '/login.html');
});
 
console.log("running at port : " + port );

app.listen(port);