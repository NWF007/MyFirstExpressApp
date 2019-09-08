var express = require("express");
var app = express();

//root path
//req = request res = response
app.get("/", function(req, res){
	res.send("Hi there!");	
});

//bye route
app.get("/bye", function(req, res){
	res.send("Goodbye!!");
});

//nico route
app.get("/nico", function(req, res){
	res.send("I'm cool");
})


app.listen(3000, function(){
	console.log("Server listening on port 3000");
});