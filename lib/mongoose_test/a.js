var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_test');


// register
var Tasks = mongoose.Schema({
	project: String,
	desription: String,
	note: {
		
	}
});

var Task = mongoose.model('Task', Tasks);

// added
var task = new Task({
	project:'Bikeshed',
	desription:'Paint the bikeshed red.'
});
// task.project = 'Bikeshed';
// task.desription = 'Paint the bikeshed red.';

task.save(function (err) {
  if (err) throw err;
  console.log('Task saved.');
})

// mongoose.disconnect();
