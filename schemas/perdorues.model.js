const mongoose = require('mongoose');

const Perdorues = mongoose.Schema({
  username: String,
  password: String,
  emri: String,
  mbiemri: String,
  datelindja: Date,
  email: String,
  celular: String,
  adresa: String,
  shporta: []
});

module.exports = mongoose.model('Perdorues', Perdorues, 'perdoruesit');
