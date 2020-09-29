const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('connected to MongoDb...'))
.catch((err) => console.log('did not connect to mongodb..., ', err));

