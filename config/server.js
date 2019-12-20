var express= require('express');
var path= require('path')
var app=express();
var bodyParser=require('body-parser');
var consign=require('consign');

app.set('views', path.join(__dirname, '../app/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended:true}));

consign().include('app/routes')
.then('config/dbconnection.js')
.then('app/models')
.into(app)


module.exports= app;