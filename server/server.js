const express = require('express');
const path = require('path');
const app = express();

const port = 5000;



app.use(express.static(path.join(__dirname, '/public')));
app.use('/static', express.static(path.join(__dirname, '/../public/static')));

app.get('/', function(req,res) {
  res.sendFile(path.resolve(__dirname+'/../public/index.html'));
})

app.listen(port);
console.log("server listening in port: " + port);
