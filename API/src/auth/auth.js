var passchecker = require("../model/passcheck");
//var db = require('../model/db_usuarios');
var cloudant= require('../cloudant/cloudant_connection').cloudant;
var db = cloudant.db.use('users');

verifyUser = function(username, password){
  return new Promise(function(fulfill,reject){
    db.get(username, function(err, data){
        if(err){
          reject(false);
        }else{
          if(passchecker.passwords_match(data.password,password)){
            fulfill(true);
          }else{
            reject(false);
          }
        }
      });
  })
};

module.exports = {
  verifyUser: verifyUser
}
