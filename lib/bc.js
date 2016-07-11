// broadcast

var express = require('express');

module.exports = (app) => {
  app.get('/bc', (req, res) => {
    res.json({'state': 'hello world!'})
  });

  app.post('/test', (req, res) => {
    res.json({'req':req.body})
  })
  app.get('/test', (req, res) => {
    res.json({req:req.body})
  })
};
