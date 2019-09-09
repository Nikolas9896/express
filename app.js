var express = require("express");

var app = express();

// "/" "Hi there!";
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink!",
        dog: "WOOF WOOF!",
        cow: "Moo!",
        cat: "MEOW!"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send(sound);

});

app.get("/repeat/:word/:much", function(req, res){
    var much = Number(req.params.much);
    var word = req.params.word;
    var str = "";
    for(var i = 0; i < much; i++)
    {
         str += word + " ";
    }
    res.send(str);
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

