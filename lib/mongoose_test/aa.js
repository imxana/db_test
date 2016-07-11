var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_test');

// var db = mongoose.connection;


// var kittySchema = mongoose.Schema({
//   name: String
// })
// var Kitten = mongoose.model('Task', kittySchema)

// register
var Tasks = mongoose.Schema({
	project: String,
	desription: String,
  note:{
    
  }
});
var Task = mongoose.model('Task', Tasks);

// added

// var task = new Task({shit:'haha'});


Task.create({project:'haha'}, function (err) {
  if (err) throw err;
  console.log('Task saved.');
})

// mongoose.disconnect();
