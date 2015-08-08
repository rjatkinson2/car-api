var request = require('request');

var multiSort = function (array, fields) {
  array.sort(function (a, b) {
    for (var i = 0; i < fields.length; i++) {
      if(i === fields.length - 1) {
        return (a[fields[i]] < b[fields[i]]) ? -1 : 1;
      }
      if(a[fields[i]] !== b[fields[i]]) return (a[fields[i]] < b[fields[i]]) ? -1 : 1;
    }
  });
};

var multiRequest = function (numCalls, offset, app, limit) {

};

module.exports = {
  multiSort: multiSort,
  multiRequest: multiRequest
};