var path = require("path");


module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

    app.get("/neighbors", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/neighbors.html"));
      });
      
    app.get("/posts", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/posts.html"));
      });  

}



