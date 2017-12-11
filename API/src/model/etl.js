var parseXlsx = require('excel');
var jsonexport = require('jsonexport');
var fs = require('fs');

function readExcel(fpath, Call) {
    if(fs.existsSync(fpath)){
    parseXlsx(fpath, function(err, data) {
      if (err) throw err;
      Call(null, data);
    });//fileparse
   }
   else{
     Call("file not found",null);
   }
};

var prepareJson = function(data,... extra) {
  return new Promise(function(fulfill, reject) {
     for (var i = 0; i < data.length; i++) {
         delete data[i]._rev;
    }
     fulfill(data);
  });
};

exportToCSV = function(data){
  return new Promise (function(fulfill, reject){
    prepareJson(data).then(function(json) {
       jsonexport(json, function(err, csv) {
         if (err)
           reject( console.log(err));
         else
           fulfill(csv);
       });
    });
  });
};

exports.exportToCSV = exportToCSV;
module.exports.readExcel = readExcel;
