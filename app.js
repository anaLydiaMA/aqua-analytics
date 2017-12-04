var express = require('express');
var app = express();
//require ('./src/config/express')(app);
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var users = require('./API/src/routes/usuarios_router');
var record = require('./API/src/routes/record_router');
app.use('/users',users);
app.use('/data',record);

app.listen(port, function(err){
  console.log('running on server on port:'+ port);
});
