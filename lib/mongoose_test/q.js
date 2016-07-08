var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_test');

var db = mongoose.connection;

var Tasks = mongoose.Schema({
	project: String,
	desription: String
});
mongoose.model('Task', Tasks);



var Task = mongoose.model('Task')
Task.find({'project': 'Bikeshed'}, function (err, tasks) {
	for (var i = 0; i < tasks.length; i++) {
		console.log('ID:' + tasks[i]._id);
		console.log(tasks[i].desription);
	};
});
