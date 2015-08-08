var request = require('request');

var retrieveData = function (app) {

  var data, total;

  var url = 'http://interview.carlypso.com/count';
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      data = JSON.parse(body);
      total = data.value;
    }

    var url2 = 'http://interview.carlypso.com/listings?offset=0&limit=40';
    request(url2, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        data = JSON.parse(body).value;
        app.set('data', data);
      }
    });
  });

};

module.exports = retrieveData;