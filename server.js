var express = require('express');

var app = express();

app.use(express.static(__dirname+'/public'));

// var homeRoute = ['/','/home','/mainindex'];

// app.get(homeRoute,function(req,res){
//     res.sendFile('mainindex.html',{'root': __dirname+'/public'});
// })

// app.get('/contact',function(req,res){
//     res.sendFile('contact.html',{'root': __dirname+'/public'});
// })


app.listen(3000)