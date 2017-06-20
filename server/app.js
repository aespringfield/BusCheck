var express = require('express');
var app = express();

// ROUTE MODULES
var index = require('./routes/index.js');
var stops = require('./routes/stops.js');

app.set('port', 5000);

app.use(express.static('server/public'));

app.use('/stops', stops);
app.use('/*', index);

app.listen(app.get('port'), function(){
  console.log('Listening on port', app.get('port'));
});
