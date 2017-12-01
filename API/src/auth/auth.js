var db = require('../model/db_usuarios');

verifyUser = function (userID) {
  return new Promise(function(fulfill, reject) {
    db.get(userID).then(function (data) {
      if (data) {
        fulfill(true)
      }
      else {
        reject(false)
      }
    }).catch(function (err) {
      reject(false)
    })
  });
}

module.exports = {
  verifyUser: verifyUser
}
