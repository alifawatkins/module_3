const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("<header>99 Bottles of Antidepressants on the Wall</header> <a href='/98'>Take One Down, Pass it Around</a>");
});

app.get("/:bottlesofantis", function(req,res){
    if(req.params.bottlesofantis > 0) {
       res.send(`<header>${req.params.bottlesofantis} Bottles of Antidepressants on the Wall</header> <a href='/${req.params.bottlesofantis-1}'>Take One Down, Pass it Around</a>`); 
    } else {
        res.send(`<header>${req.params.bottlesofantis} Bottles of Antidepressants on the Wall</header> <a href='/'>Start Over</a>`); 
    }
});

app.listen(3000,function(){
    console.log("Listening");
})