// this file will be a set of routes for displaying posts from neighbors and saving data to the database

// dependencies

//requiring the models
var { Post, Neighbor } = require("../models");

//routes
module.exports = function(app) {



// GET route for getting all the posts
app.get("/api/posts", function(req, res) {
    var query = {};
    if (req.query.neighbor_id) {
      query.NeighborId = req.query.neighbor_id;
    }


// POST route for saving a new post
Post.findAll({
    where: query,
    include: [Neighbor]
  }).then(function(Post) {
    res.json(Post);
  });
});

// DELETE route for deleting posts

app.post("/api/posts", function(req, res) {
    Post.create(req.body).then(function(Post) {
      res.json(Post);
    });
  });



// PUT route for updating posts
app.put("/api/posts", function(req, res) {
    Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(Post) {
      res.json(Post);
    });
  });
};


