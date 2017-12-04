var express = require('express');
var db = require('../model/db_records');
var record_router = express.Router();
var auth = require('../auth/auth.js');
var cloudant_queries = require('../cloudant/cloudant_queries');

//make this safer
record_router.route('/')
  .get(function(req, res) {
    db.get().then(function(data) {
      res.status(200).send(data);
    }).catch(function(err) {
      res.status(404).send({});
    })
  })

module.exports = record_router;
