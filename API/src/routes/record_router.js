var express = require('express');
var db = require('../model/db_records');
var record_router = express.Router();
var auth = require('../auth/auth.js');
var cloudant_queries = require('../cloudant/cloudant_queries');

record_router.route('/rating')
  .post(function(req, res) {
    if(req.body.username != undefined && req.body.password != undefined){
      auth.verifyUser(req.body.username, req.body.password).then(function(value) {
        if(value == true){
          db.rating().then(function(data) {
            res.status(200).send(data);
          }).catch(function(err) {
            res.status(404).send({});
          })
        }
      }).catch(function(err) {
        res.status(403).send({});
      })
    } else {
      res.status(404).send({});
    }
  })

  record_router.route('/new/:id')
    .post(function(req, res) {
      if(req.body.username != undefined && req.body.password != undefined){
        auth.verifyUser(req.body.username, req.body.password).then(function(value) {
          if(value == true){
            db.get(req.params.id,true).then(function(data) {
              res.status(200).send(data);
            }).catch(function(err) {
              res.status(404).send({});
            })
          }
        }).catch(function(err) {
          res.status(403).send({});
        })
      } else {
        res.status(404).send({});
      }
    })

record_router.route('/:id')
  .post(function(req, res) {
    if(req.body.username != undefined && req.body.password != undefined){
      auth.verifyUser(req.body.username, req.body.password).then(function(value) {
        if(value == true){
          db.get(req.params.id,false).then(function(data) {
            res.status(200).send(data);
          }).catch(function(err) {
            res.status(404).send({});
          })
        }
      }).catch(function(err) {
        res.status(403).send({});
      })
    } else {
      res.status(404).send({});
    }
  })

module.exports = record_router;
