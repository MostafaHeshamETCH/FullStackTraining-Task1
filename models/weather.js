const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  temp: {
    type: String,
    required: true,
  },
  wind: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;