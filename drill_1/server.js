var express = require('express'),
	app = express();

var bestTeams = [
	"San Francisco 49ers",
	"Golden State Warriors",
	"San Francisco Giants"
];

var designers = [
	"Balmain",
	"Kenzo",
	"Issey Miyake"
]

app.use(express.static('public'));

app.get("/", function(req, res) {
	res.send("Hello World");
});

app.get("/bestTeams", function(req, res) {
	res.send("The best sports' teams are " + bestTeams.join(", "));
});

app.get("/designers", function(req, res){
	res.send("Reva's favorite designers are " + designers.join(", "));
});

app.listen(3000, function() {
	console.log("Go to localhost:3000/");
});