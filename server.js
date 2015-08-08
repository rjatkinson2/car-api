var express = require('express');
var app = express();
var port = 8000;

require('./retrieve-data')(app);
require('./middleware')(app);
require('./routes/routes')(app);

// app.use(express.static(__dirname + '/../dist/client'));

app.listen(port, function () {
  console.log('App now listening on port 8000:');
});

module.exports = app;