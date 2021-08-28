//requires
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

//express init
const app = express();

//db connection handling
const dbURI = "mongodb+srv://Etchos:x5dIGf4P3gk5LoUG@cluster0.8vmec.mongodb.net/NodeJS-CrashCourse?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser: true, UseUnifiedTopology: true}).then(
  (result) => {
    console.log("connected to db");
    app.listen(3000);
    console.log("server on port 3000");
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

//middleware for encoding to accept form data
app.use(express.urlencoded({extended: true}));

//routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

//blog routes from router
app.use('/blogs', blogRoutes);
  
//weather routes from router
app.use('/api', weatherRoutes);

// 404 page (must be last) - use function is executed for every request
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
