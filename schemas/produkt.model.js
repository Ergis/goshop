const mongoose = require('mongoose');

const Produkt = mongoose.Schema({
  emri: String,
  kategoria: [String],
  sasia: Number,
  cmimi: Number,
  oferta: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Produkt', Produkt, 'produktet');
