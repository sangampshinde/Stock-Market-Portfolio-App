const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  company: String,
  description: String,
  initial_price: Number,
  price_2002: Number,
  price_2007: Number,
  symbol: String,
});

const Stocks = mongoose.model('Stocks', stockSchema); 

module.exports = Stocks; 