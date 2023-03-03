const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();

const {
  DB_USER,
  DB_PASS,
  DB_NAME,
  DB_HOST,
  DB_PORT,
} = process.env;

const url = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?authSource=admin`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.log('Error on connecting to MongoDB', err);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(DB_PORT, () => {
  console.log(`Server running on port ${DB_PORT}`);
});

module.exports = app;
