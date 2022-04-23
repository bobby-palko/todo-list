import express from 'express';
import { urlencoded, json } from 'body-parser';
import cors from 'cors';

// database connection information
import db from './db/index';

// where we've defined all the endpoints
import itemRouter from './routes/item-router';

const app = express();
const apiPort = 3000;

app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// root route for api endpoints
app.use('/api', itemRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
