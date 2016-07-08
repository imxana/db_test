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

Task.find({'_id': '577d296511c70c1469211367'}, function (err, tasks) {
  tasks[0].remove();
	for (var i = 0; i < tasks.length; i++) {
    if (err) console.log(err);
    console.log(tasks[0]);
		// console.log('ID:' + tasks[i]._id);
		// console.log(tasks[i].desription);
	};
});
