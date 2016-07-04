var express = require('express');

module.exports = (app) => {
  app.get('/bc', (req, res) => {
    res.json({'state': 'hello world!'})
  });
};
