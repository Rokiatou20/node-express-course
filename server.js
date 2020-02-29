const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData = [
    {name: 'Roki'},
    {name: 'Kutchi'}
]



app.listen(8000, function(){
    console.log("Server is running");
})

app.get('/Users/:id', function(req, res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: req.params.id    
    })
    console.log(req.params.id);
})

app.get('/login', function(req, res){
    const userName = req.body.userName;
    const userPass = req.body.userPass;

    const mockUserName = "Rokiatou";
    const mockUserPass = "Code";
    
    if(userName == mockUserName && userPass == mockUserPass){
        res.json({
            success: true,
            message: "Vos donnees sont correctes",
            token: 'encrypted token goes here'
        })   
    }
    else{
        res.json({
            success: false,
            message: "Vos donnees ne sont pas correctes"
        })
    }   
})

