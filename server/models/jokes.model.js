const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, "Setup is required"],
        minlength: [4, "Minimum length is 5-Joke is on you ;)"]
    },
    punchline:{
        type: String,
        required: false
    }
},{timestamps:true});

const Joke = mongoose.model("Joke",JokeSchema);

module.exports = Joke;