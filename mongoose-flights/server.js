require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const Flight = require('./models/flight.js');
const app = express();
const PORT = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.send("<h1>Mongoose Flights</h1>");
});

app.get('/flights/new', (req, res)=>{
    res.render('New');
});

app.get('/flights', (req, res) => {
    Flight.find({}, (error, allFlights)=> {
        res.render('Index', {flights: allFlights});
    });
});

app.post('/flights', (req, res)=>{
    Flight.create(req.body, (error, createdFlight) =>{
        res.redirect('/flights');
    });
});

app.listen(3000, () => {
    console.log(`Server running on  port: ${PORT}`);
    // gets the warning message out
    mongoose.set('strictQuery', true)
    // connect to mongodDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})