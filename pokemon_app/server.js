const express = require("express");
const pokemon = require("./models/pokemon");
const app = express();
const PORT = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>");
});

app.get("/pokemon", (req, res) => {
    res.render("Index", {pokemon: pokemon});
});

app.get("/pokemon/:id", (req, res) => {
    res.send(req.params.id);
});

app.listen(3000, () => {
    console.log(`Server running on  port: ${PORT}`);
    // // gets the warning message out
    // mongoose.set('strictQuery', true)
    // // connect to mongodDB
    // mongoose.connect(process.env.MONGO_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   })
    // mongoose.connection.once('open', () => {
    //     console.log('Connected to MongoDB!')
    // })
})