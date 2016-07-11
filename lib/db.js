var mongoose = require('mongoose');

function mongodb() {
  var noteSchema = mongoose.Schema({
    userid: String,
    noteid: String,
    title: String,
    content: String,
    time: { type: Date, default: Date.now },
  })

  this.Note = mongoose.model('note', noteSchema);

  var userSchema = mongoose.Schema({
    name: String,
    userid: String
  })
  this.User = mongoose.model('user', userSchema);

  mongoose.connect('mongodb://localhost/db_test');
  var db = mongoose.connection

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
    console.log('MongoDB once opened..');
  });
}

module.exports = mongodb;
