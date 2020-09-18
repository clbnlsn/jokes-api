const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get("/api/jokes", JokeController.ShowAll);
    app.get("/api/jokes/:id", JokeController.ShowOne);
    app.put("/api/jokes/edit/:id", JokeController.Edit);
    app.post("/api/jokes/new", JokeController.CreateNew);
    app.delete("/api/jokes/delete/:id", JokeController.Destroy);
};