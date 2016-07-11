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


Task.find({'desription': 'Paint the bikeshed red.'}, function (err, tasks) {
  tasks[0].desription = '1st has changed'
  tasks[0].save()
});
