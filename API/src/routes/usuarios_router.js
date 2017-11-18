var express = require('express');
var db = require('../model/db_usuarios');
var guides_router = express.Router();

var auth = require('../auth/auth.js');
var cloudant_queries = require('../cloudant/cloudant_queries');

guides_router.route('/')
  .get(function(req, res) {
    if (process.env.NODE_ENV == 'test' || auth.verifyToken(req.headers.token)) {
      db.list().then(function(data) {
        res.status(200).send(data);
      })
    } else {
      res.status(403).send({});
    }
  })
  .post(function(req, res) {
    if (process.env.NODE_ENV == 'test' || auth.verifyToken(req.headers.token)) {
      db.create(req.body).then(function(data) {
        res.status(201).send(data);
      }).catch(function(err) {
        res.status(400).send({});
      })
    } else {
      res.status(403).send({});
    }
  })
  .put(function(req, res) {
    if (process.env.NODE_ENV == 'test' || auth.verifyToken(req.headers.token)) {
      db.update(req.body).then(function(data) {
        res.status(200).send(data);
      })
    } else {
      res.status(403).send({});
    }
  })

guides_router.route('/:id')
  .get(function(req, res) {
    if (process.env.NODE_ENV == 'test' || auth.verifyToken(req.headers.token)) {
      db.get(req.params.id).then(function(data) {
        res.status(200).send(data);
      })
    } else {
      res.status(403).send({});
    }
  })

module.exports = guides_router;
