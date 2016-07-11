// signup and signin

var express = require('express');
var mongoose = require('mongoose');
var common = require('./common');


// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (callback) {
//   console.log('MongoDB once opened..');
// });

// var userSchema = mongoose.Schema({
//   name: String,
//   userid: String
// })
// var User = mongoose.model('user', userSchema);
//
//
//
// var noteSchema = mongoose.Schema({
//   userid: String,
//   noteid: String,
//   title: String,
//   content: String,
//   time: { type: Date, default: Date.now },
// })
// var Note = mongoose.model('note', noteSchema);

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



// var silence = new Kitten({ name: 'Silence' })
// console.log(silence.name) // 'Silence'



// // NOTE: methods must be added to the schema before compiling it with mongoose.model()
// kittySchema.methods.speak = function () {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name"
//   console.log(greeting);
// }
// var Kitten = mongoose.model('Kitten', kittySchema)
//
//
// var fluffy = new Kitten({ name: 'fluffy' });
// // fluffy.speak() // "Meow name is fluffy"
//
//
// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   fluffy.speak();
// });
//
//
//
// Kitten.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens)
// })
//
//
//
// Kitten.find({ name: /^Fluff/ }, function (sth) {
//   console.log(sth);
// })
