var usuario = require('./object_definitions').usuario;
var cloudant= require('../cloudant/cloudant_connection').cloudant;
var indexes = require('../cloudant/cloudant_indexes').object_indexes;
var db = cloudant.db.use(process.env.CLOUDANT_SERVICE_NAME);

var functions = function(usuario, db_name, indexes) {
  var get = function(id) {
    return new Promise(function(resolve, reject) {
      if (id) {
        db.get(id, function(err, data) {
          if (data) {
            resolve(data);
          } else {
            reject(204);
          }
        });
      } else {
        reject(400);
      }
    });
  }
  var list = function() {
    return new Promise(function(resolve, reject) {
      db.list({
        include_docs: true
      }, function(err, data) {
        if (data) {
          var result = [];
          data.rows.forEach(function(row) {

            if (row.id.substr(0, 8) !== '_design/') {
              result.push(row.doc);
            }
          });
          resolve(result);
        } else {
          reject(204);
        }
      });
    });
  }
  var create = function(new_object) {
    return new Promise(function(resolve, reject) {
      if(new_object != undefined){
        if(new_object._rev != undefined){
          delete new_object._rev;
        }
        var model = JSON.parse(JSON.stringify(usuario));
        Object.keys(new_object).forEach(function(key){

          if(model[key] !== undefined){
            model[key] = new_object[key];
          }
        });
        db.insert(model, function(err, data){
          if(data){
            resolve(data);
          }else{
            reject(500);
          }
        });
      }else{
        reject(400);
      }
    });
  }
  var update = function(new_object) {
    return new Promise(function(resolve, reject) {
      if(new_object != undefined && new_object._id != undefined){
        if(new_object._rev != undefined){
          delete new_object._rev;
        }
        db.get(new_object._id,function(err, old_object){
          if(old_object){
            Object.keys(new_object).forEach(function(key){
              if(old_object[key] !== undefined){
                old_object[key] = new_object[key];
              }
            });
            db.insert(old_object, function(err, response){
              if(response){
                old_object._rev = response.rev;
                resolve(old_object);
              }else{
                reject(500);
              }
            });
          }else{
            reject(204);
          }
        });
      }else{
        reject(400);
      }
    });
  }
  var destroy = function(id) {
    return new Promise(function(resolve, reject) {
      if(id){
        db.get(id, function(err, data){
          if(data){
            db.destroy(data._id,data._rev,function(err, data){

              if(data){
                resolve(data);
              }else{
                reject(500);
              }
            });
          }else{
            reject(204);
          }
        })
      }else{
        reject(400);
      }
    });
  }

  var search = function(query) {
    return new Promise(function(resolve, reject) {
      db.find(query, function(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result.docs);
        }
      });
    });
  }

  var resetDB = function() {
    return new Promise(function(resolve, reject) {
      cloudant.db.destroy(process.env.CLOUDANT_SERVICE_NAME, function(err) {
        if (err) {
          console.log(err);
        } else {
          cloudant.db.create(process.env.CLOUDANT_SERVICE_NAME, function() {
            if (err) {
              console.log(err);
            } else {
              db = cloudant.db.use(process.env.CLOUDANT_SERVICE_NAME);
              initDB().then(function(response){
                resolve(response)
              }).catch(function(err){
                reject(err);
              });
            }
          })
        }
      })
    })
  }

  var initDB = function() {
    return new Promise(function(resolve, reject) {
      if(!indexes){
        resolve(200);
      }else{
        var length = Object.keys(indexes).length;
        var count = 0;
        Object.keys(indexes).forEach(function(key) {
          db.index(indexes[key], function(err, response) {
            ++count;
            if (err) {
              reject(err);
              console.log(err);
            } else {
              console.log('"' + indexes[key].name + '" index created');
            }
            if (count == length) {
              resolve(200);
            }
          });
        });
      }
    })
  }

  return {
    'db': db,
    'get': get,
    'list': list,
    'create': create,
    'update': update,
    'destroy': destroy,
    'resetDB': resetDB,
    'initDB': initDB,
    'search': search
  }
}

module.exports.functions = functions
