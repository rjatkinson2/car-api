var multiSort = require('../api-utils').multiSort;

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.send(app.get('store'));
  });

  app.get('/cars', function (req, res) {
    var data = app.get('store'), results = [];

    // combine data if separated by groupBy. Alternatively, use pagination
    // for(var key in data) {
    //   results = results.concat(data[key]);
    // }

    if(req.query.sort){
      var sortParams = req.query.sort.split(',');
      multiSort(results, sortParams);
    }

    res.send(results);
  });

  app.get('/cars', function (req, res) {
    var data = app.get('store');
    var start = req.query.start;
    var end = req.query.end;

    var results = [];

    for (var i = 0; i < data.length; i++) {
      var price = data[i].price;
      if(start <= price && price <= end){
        results.push(data[i]);
      }
    }

    res.send(results);
  });
};