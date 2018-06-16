const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Perdorues = require('./schemas/perdorues.model');
const Admin = require('./schemas/admin.model');
const Produkt = require('./schemas/produkt.model');

mongoose.connect('mongodb://localhost/goshop');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected'));

const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.get('/produktet', (req, res) => {
  Produkt.find().exec((err, produktet) => {
      res.send(JSON.stringify(produktet));
  });
});

app.listen(PORT, () => console.log('Goshop running, port ' + PORT));
