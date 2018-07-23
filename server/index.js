const mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://localhost/capStoneUsers';
mongoose.connect(mongoDB);

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');
const faker = require('faker');
const app = express();
const port = 8080;

//middleware used on http request(s)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use('/api', router);


app.listen(port, () => console.log(`Server is listening on port: ${port}`));