var db = require("../models");

module.exports = function(app) {
  app.get("/api/neighbor", function(req, res) {

    db.Neighbor.findAll({
      include: [db.Post]
    }).then(function(dbNeighbor) {
      res.json(dbNeighbor);
    });
  });

  app.get("/api/neighbor/:id", function(req, res) {
  
    db.Neighbor.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbNeighbor) {
      res.json(dbNeighbor);
    });
  });

  app.post("/api/neighbor", function(req, res) {
    db.Neighbor.create(req.body).then(function(dbNeighbor) {
      res.json(dbNeighbor);
    });
  });

  app.delete("/api/neighbor/:id", function(req, res) {
    db.Neighbor.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbNeighbor) {
      res.json(dbNeighbor);
    });
  });

};