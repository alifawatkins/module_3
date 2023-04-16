const mongoose = require('mongoose');

// Mongoose Veggie Schema (Blueprint)
const veggieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean
});


// Mongoose Model
const Veggie = mongoose.model('Veggie', veggieSchema);

module.exports = Veggie;