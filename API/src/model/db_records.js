var cloudant= require('../cloudant/cloudant_connection').cloudant;
var indexes = require('../cloudant/cloudant_indexes').object_indexes;
var db = cloudant.db.use('data');

var functions = (function() {
  var get = function(doc,newData) {
    return new Promise(function(fulfill, reject) {
      db.get(doc, function(err, data) {
        if (data) {
          if(newData){
            fulfill(data.new_graph);
          } else {
            fulfill(data.graph);
          }
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
            {'municipio': 'Guadalajara','value': 0},
            {'municipio': 'Zapopan','value': 0},
            {'municipio': 'San Pedro Tlaquepaque','value': 0},
            {'municipio': 'Tonalá','value': 0},
            {'municipio': 'Tlajomulco de Zúñiga','value': 0},
            {'municipio': 'El Salto','value': 0},
            {'municipio': 'Ixtlahuacán de los Membrillos','value': 0},
            {'municipio': 'Juanacatlán','value': 0}
          ];
          //OVERVIEW: the lowest 4
          processSum(object.data[0]).then(function(overview) {
            results[municipios.indexOf(overview[0].municipio)].value++;
            results[municipios.indexOf(overview[1].municipio)].value++;
            results[municipios.indexOf(overview[2].municipio)].value++;
            results[municipios.indexOf(overview[3].municipio)].value++;
          //FACILITIES: the greatest 4
          process(object.data[1]).then(function(facilities) {
            results[municipios.indexOf(facilities[4].municipio)].value++;
            results[municipios.indexOf(facilities[5].municipio)].value++;
            results[municipios.indexOf(facilities[6].municipio)].value++;
            results[municipios.indexOf(facilities[7].municipio)].value++;
          // SITUATION OF HOUSING: the greatest 4
          processAverage(object.data[2]).then(function(housing) {
            results[municipios.indexOf(housing[4].municipio)].value++;
            results[municipios.indexOf(housing[5].municipio)].value++;
            results[municipios.indexOf(housing[6].municipio)].value++;
            results[municipios.indexOf(housing[7].municipio)].value++;
          // POPULATION: the greatest 3
          processLast(object.data[3]).then(function(population) {
            results[municipios.indexOf(population[5].municipio)].value++;
            results[municipios.indexOf(population[6].municipio)].value++;
            results[municipios.indexOf(population[7].municipio)].value++;
          // ECONOMIC ACTIVITY: the greatest 5
          process(object.data[4]).then(function(economic) {
            results[municipios.indexOf(economic[3].municipio)].value++;
            results[municipios.indexOf(economic[4].municipio)].value++;
            results[municipios.indexOf(economic[5].municipio)].value++;
            results[municipios.indexOf(economic[6].municipio)].value++;
            results[municipios.indexOf(economic[7].municipio)].value++;
          // ENVIROMENTAL CARE: lowest 3
          process(object.data[5]).then(function(economic) {
            results[municipios.indexOf(economic[0].municipio)].value++;
            results[municipios.indexOf(economic[1].municipio)].value++;
            results[municipios.indexOf(economic[2].municipio)].value++;
            //Summary
            results.sort(function(a, b){
                return b.value - a.value;
            });
            var top = [];
            top.push(results[0].municipio);
            top.push(results[1].municipio);
            top.push(results[2].municipio);
            fulfill(top);
          })
          })
          })
          })
          })
          })
        } else {
          reject(404);
        }
      });
    });
  }
  var processAverage = function(housing) {
    return new Promise(function(fulfill, reject) {
      var aux = [
        {'municipio': 'Guadalajara','value': 0},
        {'municipio': 'Zapopan','value': 0},
        {'municipio': 'San Pedro Tlaquepaque','value': 0},
        {'municipio': 'Tonalá','value': 0},
        {'municipio': 'Tlajomulco de Zúñiga','value': 0},
        {'municipio': 'El Salto','value': 0},
        {'municipio': 'Ixtlahuacán de los Membrillos','value': 0},
        {'municipio': 'Juanacatlán','value': 0}
      ];
      for(i in housing.lineChartData){
        var sum = 0;
        for(j in housing.lineChartData[i].data){
          sum+= housing.lineChartData[i].data[j];
        }
        var service = housing.lineChartData[i].data[0] * 100 / sum;
        var noService = 100 - service;
        aux[i].value = noService;
      }
      aux.sort(function(a, b){
          return a.value - b.value;
      });
      fulfill(aux);
      });
  }

  var processLast = function(population) {
    return new Promise(function(fulfill, reject) {
      var aux = [
        {'municipio': 'Guadalajara','value': 0},
        {'municipio': 'Zapopan','value': 0},
        {'municipio': 'San Pedro Tlaquepaque','value': 0},
        {'municipio': 'Tonalá','value': 0},
        {'municipio': 'Tlajomulco de Zúñiga','value': 0},
        {'municipio': 'El Salto','value': 0},
        {'municipio': 'Ixtlahuacán de los Membrillos','value': 0},
        {'municipio': 'Juanacatlán','value': 0}
      ];
      for(i in population.lineChartData){
        aux[i].value = population.lineChartData[i].data[20];
      }
      aux.sort(function(a, b){
          return a.value - b.value;
      });
      fulfill(aux);
      });
  }

  var processSum = function(data) {
    return new Promise(function(fulfill, reject) {
      var aux = [
        {'municipio': 'Guadalajara','value': 0},
        {'municipio': 'Zapopan','value': 0},
        {'municipio': 'San Pedro Tlaquepaque','value': 0},
        {'municipio': 'Tonalá','value': 0},
        {'municipio': 'Tlajomulco de Zúñiga','value': 0},
        {'municipio': 'El Salto','value': 0},
        {'municipio': 'Ixtlahuacán de los Membrillos','value': 0},
        {'municipio': 'Juanacatlán','value': 0}
      ];
      for(i in data.lineChartData){
        var sum = 0;
        for(j in data.lineChartData[i].data){
          sum+= data.lineChartData[i].data[j];
        }
        aux[i].value = sum;
      }
      aux.sort(function(a, b){
          return a.value - b.value;
      });
      fulfill(aux);
      });
  }

  var process = function(data) {
    return new Promise(function(fulfill, reject) {
      var aux = [
        {'municipio': 'Guadalajara','value': 0},
        {'municipio': 'Zapopan','value': 0},
        {'municipio': 'San Pedro Tlaquepaque','value': 0},
        {'municipio': 'Tonalá','value': 0},
        {'municipio': 'Tlajomulco de Zúñiga','value': 0},
        {'municipio': 'El Salto','value': 0},
        {'municipio': 'Ixtlahuacán de los Membrillos','value': 0},
        {'municipio': 'Juanacatlán','value': 0}
      ];
      for(i in data.roundChartData){
        aux[i].value = data.roundChartData[i];
      }
      aux.sort(function(a, b){
          return a.value - b.value;
      });
      fulfill(aux);
      });
  }

  return {
    'get': get,
    'rating': rating
  };

})();
module.exports = functions;
