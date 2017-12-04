var express = require('express');
var db = require('../model/db_usuarios');
var usuarios_router = express.Router();
var auth = require('../auth/auth.js');
var cloudant_queries = require('../cloudant/cloudant_queries');

usuarios_router.route('/')
  .get(function(req, res) {
    db.list().then(function(data) {
      res.status(200).send(data);
    }).catch(function(err) {
      res.status(404).send({});
    })
  })
  .post(function(req, res) {
    db.create(req.body).then(function(data) {
      res.status(201).send(data);
    }).catch(function(err) {
      res.status(400).send({});
    })
  })

usuarios_router.route('/:id')
  .delete(function(req, res) {
    db.destroy(req.params.id).then(function(data) {
      res.status(200).send(data);
    }).catch(function(err) {
      res.status(400).send({});
    })
  })

usuarios_router.route('/login')
  .post(function(req, res) {
    db.login(req.body.username,req.body.password).then(function(data) {
      res.status(200).send(data);
    }).catch(function(err) {
      res.status(403).send({});
    })
  })

module.exports = usuarios_router;
