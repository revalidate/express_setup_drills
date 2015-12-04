var express = require('express'),
	app = express();

var shirtColor = [
	"red",
	"blue",
	"yello"
]

var continents = [
	"North America",
	"South America",
	"Africa",
	"Australia",
	"Asia",
	"Europe",
	"Antarctica"
]

app.use(express.static('public'));

app.get("/", function(req,res){
	res.send("Hello World");
});

app.get("/shirtColor", function(req,res){
	res.send("hello");
});

app.get("/continents", function(req,res) {
	res.send("hello");
});

app.listen(3000, function(){
	console.log("Go to localhost:3000/");
})