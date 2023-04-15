const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.get('/', (req, res) => {
    res.send('<h1>Welcome Home</h1>');
});

app.get('/logs/new', (req, res) => {
    res.render('new');
});

app.post('/logs/', (req, res) => {
    res.send(req.body);
});

app.listen(3000, () => {
    console.log('listening');
});