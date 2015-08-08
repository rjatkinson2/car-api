var request = require('request');
var multiRequest = require('./api-utils').multiRequest;
var API_LIMIT = 10000;

var retrieveData = function (app) {

  var store = [], totalEntries, numCalls, offset = 0, data;

  var url = 'http://interview.carlypso.com/count';
  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      totalEntries = JSON.parse(body).value;
      numCalls = Math.ceil(totalEntries / API_LIMIT);
      console.log("numCalls:", numCalls);
    }

    multiRequest = function () {
      var url2 = 'http://interview.carlypso.com/listings?offset=' + offset + '&limit=' + API_LIMIT;
      request(url2, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          data = JSON.parse(body).value;
          store = store.concat(data);
          numCalls = 0;
          console.log("numCalls:", numCalls);
        }
        if (numCalls > 0) {
          offset = offset + API_LIMIT;
          multiRequest();
        } else {
          app.set('store', store);
          console.log("store:", store);
        }
      });
    };

    multiRequest();

  });

};

module.exports = retrieveData;