var express = require("express");

var app = express();

// "/" "Hi there!";
app.get("/", function(req, res){
    res.send("Hi there!");
});
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/dog", function(req, res){
    console.log("Somebody make a request!YES YES!");
    res.send("MEOW!");
});

app.get("*", function(req, res){
    console.log("Let's go!");
    res.send("YOU MY STAR!");
});
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });
// "/bye" "Goodbye!";
// "/dog" "MEOW!";

