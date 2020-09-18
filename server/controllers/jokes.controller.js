const Joke = require('../models/jokes.model');

module.exports.ShowAll = (req,res) => {
    Joke.find()
        .then(allJokes => res.json({ results: allJokes }))
        .catch(err => res.json({error: err}));
};

module.exports.ShowOne = (req,res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json({results: oneJoke}))
        .catch(err => res.json({error:err}));
};

module.exports.CreateNew = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({results:newJoke}))
        .catch(err => res.json({error: err}));
};

module.exports.Edit = (req,res) => {
    Joke.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then(editedJoke => res.json({results:editedJoke}))
        .catch(err => res.json({error: err}));
};

module.exports.Destroy = (req,res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({results:result}))
        .catch(err => res.json({error:err}));
};