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
  return {
    'get': get
  };

})();
module.exports = functions;
