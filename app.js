var express = require("express");

var app = express();

// "/" "Hi there!";
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    console.log(req.params.animal);
    var animal = req.params.animal;
    if(animal === "dog")
    {
        res.send("WOOF!");
    }
    else if(animal === "cow")
    {
        res.send("Moo!");
    }
    else if(animal === "pig")
    {
        res.send("Oink!");
    }
    else
    {
        res.send("Sorry, page not found...What are you doing with your life?");
    }
    

});


app.get("*", function(req, res){
    console.log("Let's go!");
    res.send("Sorry, page not found...What are you doing with your life?");
});
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });
// "/bye" "Goodbye!";
// "/dog" "MEOW!";

