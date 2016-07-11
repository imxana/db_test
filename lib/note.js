var express = require('express');
var mongoose = require('mongoose');
var common = require('./common');


var User = mongoose.model('user')
var Note = mongoose.model('note')


module.exports = (app) => {

  app.post('/note/add', (req, res) => {
    if (req.body.userid) {
      User.findOne({'userid': req.body.userid}, (err, user)=> {
        if (err) console.error(err);
        if (user) {
          if (req.body.title) {
            var noteid = common.random16();
            var note = new Note({
              noteid: noteid,
              userid: user.userid,
              title: req.body.title,
              content: req.body.content,
              // time: req.body.time,
            });
            note.save();
            res.json({ 'code': '1', 'noteid' : noteid});
          } else {
            res.json({'code': '-2', 'codeState': 'title can\'t be empty.'})
          }
        } else {
          res.json({'code': '-1', 'codeState': 'user not existed.'});
        }
      });
    } else {
      res.json({'code': '0', 'codeState': 'input unserid plz.'});
    }

  })

  app.post('/note/query', (req, res) => {

  })
  // ## (./note/del)
  //
  // post: {
  //   'userid': { userid }
  //   'noteid': { noteid },
  //   'token': { token }
  // }
  //
  // return: (
  //   suc: {
  //     'code': '1',
  //   }
  //   fail:{
  //     'code': '0',
  //     'codeState' : { ...codeState }
  //   }
  // )
  app.post('/note/del', (req, res) => {

  })
}
