// write some notes

var express = require('express');
var mongoose = require('mongoose');
var common = require('./common');
var ErrorCode = common.ErrorCode

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
          res.json(ErrorCode.userNotExisted);
        }
      });
    } else {
      res.json(ErrorCode.noteidEmpty);
    }
  })
/*  'userid' : { userid },
  'noteid': { noteid },
  'title': { title },
  'content': { content },*/

  app.post('/note/update', (req,res)=>{
    if (req.body.noteid) {
      if (req.body.userid) {
        Note.find({'userid': req.body.userid, 'noteid': req.body.noteid }, (err, note)=>{
          if (err) console.error(err);
          res.json({'code':'1'});
        })
      } else {
        res.json(ErrorCode.useridEmpty)
      }
    } else {
      res.json(ErrorCode.noteidEmpty)
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
          res.json(ErrorCode.noteNotExisted);
        }
      });
    } else {
      res.json(ErrorCode.noteidEmpty);
    }
  })



  app.post('/note/del', (req, res) => {
    if (req.body.noteid) {
      if (req.body.userid) {
        Note.find({'userid': req.body.userid, 'noteid': req.body.noteid }, (err, notes)=>{
          if (err) console.error(err);
          if (notes.length>0) {
            Note.remove({'userid': req.body.userid, 'noteid': req.body.noteid }, (err)=>{
              if (err) console.error(err);
              res.json({'code':'1'});
            })
          } else {
            res.json(ErrorCode.noteNotExisted)
          }
        })
      } else {
        res.json(ErrorCode.useridEmpty)
      }
    } else {
      res.json(ErrorCode.noteidEmpty)
    }
  })



}
