const express = require('express');
const axios = require("axios").default;
const Weather = require('../models/weather');

const router = express.Router();

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: 'Cairo,eg',
    lat: '0',
    lon: '0',
    callback: '',
    id: '2172797',
    lang: 'null',
    units: '"metric" or "imperial"',
    mode: 'xml, html'
  },
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': '6214c231f0msh7b8f6d5a7da4b9bp112168jsn640cc2ce3f96'
  }
};

router.get('/', (req, res) => {
  axios.request(options).then(function (response) {
    const weather = new Weather({name: response.data.name, temp: response.data.main.temp, wind: response.data.wind.speed});
    weather.save();
    res.render('check_api', { title: 'Check API' , weather: response.data});
  }).catch(function (error) {
    console.error(error);
  });
  
});

module.exports = router;