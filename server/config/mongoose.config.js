const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("you are in the mainframe"))
    .catch(err => console.log("crisis level 6"));