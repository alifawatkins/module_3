require('dotenv').config();
const express = require("express");
const pokemons = require("./models/pokemons");
const Pokemon = require('./models/pokemon.js')
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>");
});

app.get("/pokemon/new", (req, res) => {
    res.render("New");
});

app.get("/pokemon", (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        res.render("Index", {pokemon: allPokemon});
    });
});

app.get("/pokemon/:id", (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render("Show", {pokemon: foundPokemon});
    });
});

app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        res.send(createdPokemon);
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