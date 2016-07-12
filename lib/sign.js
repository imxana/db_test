// signup and signin

var express = require('express');
var mongoose = require('mongoose');
var common = require('./common');

var User = mongoose.model('user')
var Note = mongoose.model('note')

module.exports = (app) => {

  app.post('/signup', (req, res) => {
    if (req.body.name) {
      User.findOne({'name': req.body.name}, (err, un)=> {
        if (err) console.error(err);
        if (un) {
          res.json({'code': '-1', 'codeState': 'username is existed.'});
        } else {
          var userid = common.random16();
          var user = new User({name:req.body.name, userid:userid});
          user.save();
          res.json({'code': '1', 'userid': userid});
        }
      });
    } else {
      res.json({'code': '0', 'codeState': 'username can\'t be empty.'});
    }
  });


  app.post('/signin', (req, res) => {
    if (req.body.name) {
      User.findOne({'name': req.body.name}, (err, un)=> {
        if (err) console.error(err);
        if (un) {
          res.json({'code': '1', 'userid': un.userid});
        } else {
          res.json({'code': '-1', 'codeState': 'user not existed.'});
        }
      });
    } else {
      res.json({'code': '0', 'codeState': 'input username plz.'});
    }
  });

};
