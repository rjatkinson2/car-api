module.exports = function (app) {

  app.get('/', function (req, res) {
    res.send(app.get('data'));
  });

  app.get('/cars', function (req, res) {
    var data = app.get('data');
    var results = data.slice();

    if(req.query.sort){
      var sortParams = req.query.sort.split(',');

      var multiSort = function (array, fields) {
        array.sort(function(a, b) {
          for (var i = 0; i < fields.length; i++) {
            if(i === fields.length - 1) {
              return (a[fields[i]] < b[fields[i]]) ? -1 : 1;
            }
            if(a[fields[i]] !== b[fields[i]]) return (a[fields[i]] < b[fields[i]]) ? -1 : 1;
          }
        });
      };

      multiSort(results, sortParams);
    }


    res.send(results);
  });

  app.get('/range', function (req, res) {
    var data = app.get('data');
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