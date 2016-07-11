var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_test');

var db = mongoose.connection;

var Tasks = mongoose.Schema({
	project: String,
	desription: String,

});
var Task = mongoose.model('Task', Tasks);

// var Task = mongoose.model('Task')

// NOTE: query with codition
// Task.find({'project': 'Bikeshed'}, function (err, tasks) {
// 	for (var i = 0; i < tasks.length; i++) {
// 		console.log('ID:' + tasks[i]._id);
// 		console.log(tasks[i].desription);
// 	};
// });

Task.find(function (err, tasks) {
	for (var i = 0; i < tasks.length; i++) {
		console.log(tasks[i]);
		// console.log('ID:' + tasks[i]._id);
		// console.log(tasks[i].desription);
	};
});
