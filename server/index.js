const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//middleware used on http request(s)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist/')));

const port = 8080;

app.listen(port, () => console.log(`Server is listening on port: ${port}`));