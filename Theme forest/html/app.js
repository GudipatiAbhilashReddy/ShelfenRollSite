const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use('/css',express.static(__dirname +'/css'));
app.use('/img',express.static(__dirname +'/img'));
app.use('/fonts',express.static(__dirname +'/fonts'));
app.use('/js',express.static(__dirname +'/js'));
app.use('/media',express.static(__dirname +'/media'));
app.use('/style.css',express.static(__dirname +'/style.css'));


app.use(express.static(path.join(__dirname, '')));

app.use('/', express.static(path.join(__dirname,'/index.html')));
app.use('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'/index.html'));
})






app.use('/', router);
app.listen(process.env.port || 4002);

console.log('Running at Port 4002');