const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// database connection information
const db = require('./db');

// where we've defined all the endpoints
const itemRouter = require ('./routes/item-router');

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// root route for api endpoints
app.use('/api/todo', itemRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));