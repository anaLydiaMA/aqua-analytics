var cloudant= require('../cloudant/cloudant_connection').cloudant;
var indexes = require('../cloudant/cloudant_indexes').object_indexes;
var db = cloudant.db.use('data');

var functions = (function() {
  var get = function(doc) {
    return new Promise(function(fulfill, reject) {
      db.get(doc, function(err, data) {
        if (data) {
          fulfill(data.graph);
        } else {
          reject(204);
        }
      });
    });
  }

  var rating = function(doc) {
    return new Promise(function(fulfill, reject) {
      db.get('GRAPHS', function(err, object) {
        if (object) {
          var municipios = ['Guadalajara','Zapopan','San Pedro Tlaquepaque','Tonalá','Tlajomulco de Zúñiga','El Salto','Ixtlahuacán de los Membrillos','Juanacatlán'];
          var results = [
            {'municipio': 'Guadalajara','value': 1},
            {'municipio': 'Zapopan','value': 4},
            {'municipio': 'San Pedro Tlaquepaque','value': 7},
            {'municipio': 'Tonalá','value': 0},
            {'municipio': 'Tlajomulco de Zúñiga','value': 3},
            {'municipio': 'El Salto','value': 4},
            {'municipio': 'Ixtlahuacán de los Membrillos','value': 5},
            {'municipio': 'Juanacatlán','value': 2}
          ];
          for (i in object.data){
            //all algotitm
          }
          var pos = 'Juanacatlán';
          results[municipios.indexOf(pos)].value++;
          results.sort(function(a, b){
              return b.value - a.value;
          });
          var top = [];
          top.push(results[0].municipio);
          top.push(results[1].municipio);
          top.push(results[2].municipio);
          fulfill(top);
        } else {
          reject(204);
        }
      });
    });
  }
  return {
    'get': get,
    'rating': rating
  };

})();
module.exports = functions;
