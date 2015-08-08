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

var groupBy = function (store, array, iteratee) {
  for (var i = 0; i < array.length; i++) {
    property = iteratee(array[i]);
    if (store[property] === undefined) {
      store[property] = [array[i]];
    } else {
      store[property].push(array[i]);
    }
  };
};

var multiRequest = function (numCalls, offset, app, limit) {

};


module.exports = {
  multiSort: multiSort,
  groupBy: groupBy,
  multiRequest: multiRequest
};