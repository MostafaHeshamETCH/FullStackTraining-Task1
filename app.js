//requires
const express = require('express');
const mongoose = require('mongoose');

//express init
const app = express();

//db connection handling
const dbURI = "mongodb+srv://Etchos:x5dIGf4P3gk5LoUG@cluster0.8vmec.mongodb.net/NodeJS-CrashCourse?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser: true, UseUnifiedTopology: true}).then(
  (result) => {
    console.log("connected to db");
    app.listen(3000);
  }
).catch(
  (err) => {
    console.log("did not connect to db");
    console.log(err);
  }
);

//view set
app.set('view engine', 'ejs');

//public folder made public
app.use(express.static('public'))

//routes - TODO
