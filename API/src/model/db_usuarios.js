var usuario = require('./object_definitions').usuario;
var cloudant= require('../cloudant/cloudant_connection').cloudant;
var indexes = require('../cloudant/cloudant_indexes').object_indexes;
var passchecker = require("./passcheck");
var db = cloudant.db.use('users');

var functions = (function() {
  var list = function() {
    return new Promise(function(fulfill, reject) {
      db.list({include_docs: true}, function(err, data) {
        if (data) {
          fulfill(result);
        } else {
          reject(404);
        }
      });
    });
  }
  var create = function(new_object) {
    return new Promise(function(fulfill, reject) {
      if(new_object != undefined){
        if(new_object.username != undefined && new_object.password != undefined){
          new_object.password = passchecker.salt_and_hash(new_object.password);
          new_object._id = new_object.username;
        }
        db.insert(new_object, function(err, data){
          if(data){
            fulfill(data);
          }else{
            reject(500);
          }
        });
      }else{
        reject(400);
      }
    });
  }
  var destroy = function(username) {
    return new Promise(function(fulfill, reject) {
      if(id){
        db.get(username, function(err, data){
          if(data){
            db.destroy(data._id,data._rev,function(err, data){
              if(data){
                fulfill(data);
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
  var login = function(username, password){
    return new Promise(function(fulfill,reject){
      if(!username || !password){
        reject(400);
      }else{
        db.get(username, function(err, data){
          if(err){
            reject(403);
          }else{
            if(passchecker.passwords_match(data.password,password)){
              delete data.password;
              fulfill(data);
            }else{
              reject(403);
            }
          }
        });
      }
    })
  };

  return {
    'list': list,
    'create': create,
    'destroy': destroy,
    'login': login
  };

})();
module.exports = functions;
