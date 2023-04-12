require('dotenv').config(); // call and configure your dotenv package
const express = require('express');
const mongoose = require('mongoose');
// Data
const veggies = require('./models/veggies');
const Veggie = require('./models/Veggie');

const app = express()
const PORT = 3000;

// ==== Configuration
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// ===== Middleware
// Setting a middleware is a function execute for all routes
app.use((req, res, next) => {
    console.log(req.url)
    next()
})
// parses the data from the request
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.send("<h1>Hello</h1>");
})

/**
 * Index Route: (return a list of veggies)
 */
app.get('/veggies', (req, res) => {
    // res.send(veggies)
    // res.render('veggies/Index', {veggies: veggies})
    Veggie.find({}, (error, allVeggies) => {
        res.render('veggies/Index', {veggies: allVeggies})
    })
})

/**
 * POST method (accept data from the form)
 */
app.post('/veggies', (req, res) => {
    console.log(req.body);
    //if checked, req.body.readyToEat is set to 'on'
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // veggies.push(req.body)

    Veggie.create(req.body, (error, createdVeggie) => {
        // res.send(createdVeggie)
        res.redirect('/veggies')
    })

})


/**
 * New Route: (return a form to create a new veggie)
 */
app.get('/veggies/new', (req, res) => {
    res.render('veggies/New')
})


/**
 * Show Route: (returns an single veggie)
 */
app.get('/veggies/:id', (req, res) => {
    console.log(req.params);
    // res.send(veggies[req.params.indexOfVeggieArray])
    // res.render('veggies/Show', {veggie: veggies[req.params.indexOfVeggieArray]} )
    Veggie.findById(req.params.id, (error, foundVeggie) => {
        res.render('veggies/Show', {veggie: foundVeggie})
    })
})

// if none of the routes matches the request show 404 pg
app.get('*', (req, res) => {
    // res.redirect('/veggies')
    res.render('404')
})



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