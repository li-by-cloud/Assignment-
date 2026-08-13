var express = require("express");
var app = express();
var req = express();
var res = express();

var HTTP_PORT = process.env.PORT || 8080;


function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }
  
//resquest to home page 
  app.post('/', function (req, res) {
    res.send('POST ')
  }) 
  // setup a 'route' to listen on the default url path (http://localhost)
  app.get("/", function(req,res){
      res.send("</a>");
  });
  
  // setup another route to listen on /blog
  app.get("/blog", function(req,res){
      res.send("<");
  });
  
  // setup another route to listen on /article
  app.get("/article", function(req,res){
    res.send("<");
});
    // setup another route to listen on /sign in
    app.get("/sign in", function(req,res){
      res.send("<");
  });
      // setup another route to listen on /register page 
      app.get("/register page", function(req,res){
        res.send("<");
    });

  app.use((req, res) => {
    res.status(404).send("Page Not Found");
  });
  // setup http server to listen on HTTP_PORT
  app.listen(HTTP_PORT, onHttpStart);


  res.redirect('../login');
  res.redirect('../sign in');
  res.redirect('../blog page');
  res.redirect('../register page');
