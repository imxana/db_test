var express = require('express');

module.exports = (app) => {
  app.get('/wp', (req, res) => {
    if (!req.query.name) return
    var name = req.query.name
    if (req.query.gender) {
      if (req.query.gender === 'f') {
        res.json({'state': `hello, Miss.${name}`})
      } else if (req.gender === 'm') {
        res.json({'state': `hello, Mr.${name}`})
      }
    } else {
      res.json({'state': `hello, ${name}`})
    }
  })
  app.post('/wp' ,(req, res) => {
    console.log(req.body);
    if (!req.body.name) return
    var name = req.body.name
    if (req.body.gender) {
      console.log(req.body.gender);
      if (req.body.gender === 'f') {
        res.json({'state': `hello, Miss.${name}`})
        console.log(2);
      } else if (req.body.gender === 'm') {
        res.json({'state': `hello, Mr.${name}`})
      }
    } else {
      res.json({'state': `hello, ${name}`})
    }
  })
};
