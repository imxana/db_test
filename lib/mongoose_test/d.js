var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_test');

var db = mongoose.connection;

var Tasks = mongoose.Schema({
	project: String,
	desription: String
});
mongoose.model('Task', Tasks);

var Task = mongoose.model('Task')
// Task.findById('577d29a63ae1fb4169d229fd', function (err, task) {
// 	task.remove();
// });


// NOTE: the method if from book

Task.findOne({ 'desription':'Paint the bikeshed red.'},function (err, task) {
  if (err) console.error(err);
	task.remove()
});


// Task.remove( function (err) {
//   if (err) return handleError(err);
//   // removed!
// });
