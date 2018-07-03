var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");
//app.use(express.static('public'))
app.use(express.static(__dirname + '/public'))

app.get("/", function (req, res) {
    var url = "https://talaikis.com/api/quotes/random/";
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("index", { data: data});
        }
    });
});

app.get("/quotes", function (req, res) {
    var url = "https://talaikis.com/api/quotes/random/";
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("index", { data: data});
        }
    });
});

app.listen(3000, function () {
    console.log("Quotes Generator Started!");
});

