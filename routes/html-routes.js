var path = require("path");


module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/layouts/main"));
      });

    app.get("/neighbors", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/neighbors"));
      });
      
    app.get("/posts", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/posts"));
      });  
      
}



