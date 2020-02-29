const express = require('express');
const app = express();

const mockUserData = [
    {name: 'Roki'},
    {name: 'Kutchi'}
]


app.listen(8000, function(){
    console.log("Server is running");
})

app.get('/Users', function(req, res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})