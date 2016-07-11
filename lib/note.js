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
              // NOTE: always the initialize time
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



  app.post('/note/show', (req, res) => {
    if (req.body.userid) {
      User.findOne({'userid': req.body.userid}, (err, user)=> {
        if (err) console.error(err);
        if (user) {
          Note.find({'userid': req.body.userid}, (err, notes)=>{
            var n = [];
            for (var i in notes) {
              n.push(notes[i].noteid);
            }
            res.json({'code': '1', 'notes': n });
          });
        } else {
          res.json({'code': '-1', 'codeState': 'user not existed.'});
        }
      });
    } else {
      res.json({'code': '0', 'codeState': 'input unserid plz.'});
    }
  })



  app.post('/note/query', (req, res) => {
    if (req.body.noteid) {
      Note.findOne({'noteid': req.body.noteid}, (err, note)=> {
        if (err) console.error(err);
        if (note) {
          console.log(note);
          res.json({
            'code': '1',
            'title': note.title,
            'content': note.content,
            'time': note.time,
          })
        } else {
          res.json({'code': '-1', 'codeState': 'note not existed.'});
        }
      });
    } else {
      res.json({'code': '0', 'codeState': 'input noteid plz.'});
    }
  })



  app.post('/note/del', (req, res) => {
    if (req.body.noteid) {
      if (req.body.userid) {
        Note.remove({'userid': req.body.userid, 'noteid': req.body.noteid }, (err)=>{
          if (err) console.error(err);
          res.json({'code':'1'});
        })
      } else {
        res.json({'code':'-1', 'codeState':'permission denied'})
      }
    } else {
      res.json({'code':'0', 'codeState':'note not existed'})
    }
  })



}
