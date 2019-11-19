var express= require('express');
var path= require('path')
var app=express();

app.set('views', path.join(__dirname, '../app/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('./app/public'));

module.exports= app;