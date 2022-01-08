import bodyParser from 'body-parser';
import express from 'express';
import configViewEngine from './config/viewEngine';
import route from './routes';

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
route(app);

app.listen(port, () => {
  console.log(`Backend Nodejs is running on the port ${port}`);
});
