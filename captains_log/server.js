require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const Log = require('./models/logs.js');
const app = express();
const PORT = 3000;
const methodOverride = require('method-override');

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send('<h1>Welcome Home</h1>');
});

app.get('/logs/new', (req, res) => {
    res.render('New');
});

app.get('/logs', (req, res) => {
    Log.find({}, (error, allLogs)=> {
        res.render('Index', {logs: allLogs});
    });
});

app.get('/logs/:id', (req, res)=> {
    Log.findById(req.params.id, (err, foundLog)=> {
        res.render("Show", {log: foundLog});
    });
});

app.post('/logs/', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.create(req.body, (error, createdLog) =>{
        res.redirect('/logs/' + createdLog._id);
    });
});

app.delete('/logs/:id', (req, res)=>{
    Log.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/logs'); 
    })
});

app.get('/logs/:id/edit', (req, res)=>{
    Log.findById(req.params.id, (err, foundLog)=>{
      if(!err){
        res.render(
              'Edit',
            {
                log: foundLog
            }
        );
    } else {
      res.send({ msg: err.message })
    }
    });
});

app.put('/logs/:id', (req, res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog)=>{
       console.log(updatedLog)
        res.redirect(`/logs`);
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