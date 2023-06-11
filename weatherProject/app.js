

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {

   res.sendFile(__dirname + "/index.html")
});
app.post("/",function(req,res) {
    const query = req.body.cityName;
    const apiKey = "d86aba5c105fad24b70631af22c10823";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units="+ units;
    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data",function(data) {
            const Weatherdata = JSON.parse(data);
            const temp = Weatherdata.main.temp;
            const weatherDescription = Weatherdata.weather[0].description;
            const icon = Weatherdata.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
            res.write("<h1>The temperature in "+ query +" is "+temp + " degress Celcuis</h1>");
            res.write("<h1>The Weather is currently "+ weatherDescription + " .</h1>");
            res.write("<img src= "+ imageURL +"> ")
            res.send();
            });
        });
    console.log("post requested");
});
app.listen(3000,function() {
    console.log("Server is runnning on port 3000.");
});