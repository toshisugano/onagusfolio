const express = require('express');   
const app = express();
      router = express.Router();  
//const passport = require('passport');
//const GoogleStrategy = require('passport-google-oauth20').Strategy;
    

//const keys = require('./config/keys');

/*passport.use(new GoogleStrategy({ 
    clientID: keys.clientID,
    clientSecret: keys.secret,
    callbackURL : ‘/auth/google/callback’
}, 
    (accessToken,refreshToken, profile, done ) => {
        console.log(accessToken);
    } 
));*/

const port = process.env.PORT || 8000;  
 
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

app.get('/projects/sccperformancesite' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/sccperformancesite/index.html');
}); 


app.get('/projects/leeches' , function(req, res ){ 
    res.sendFile(__dirname + '/projects/leeches/index.html');
}); 
 
app.get('/develop' , function(req, res ){ 
    res.sendFile(__dirname + '/dev.html');
}); 

app.get('/design' , function(req, res ){ 
    res.sendFile(__dirname + '/home.html');
}); 

console.log("running");

app.listen(port);