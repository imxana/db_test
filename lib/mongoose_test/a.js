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
	desription: String
});
mongoose.model('Task', Tasks);

// added
var Task = mongoose.model('Task');
var task = new Task();
task.project = 'Bikeshed';
task.desription = 'Paint the bikeshed red.';

task.save(function (err) {
  if (err) throw err;
  console.log('Task saved.');
})

// mongoose.disconnect();
