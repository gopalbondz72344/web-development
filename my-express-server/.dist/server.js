// jshint esversion:4.18.2

const express = require("express");
const app = express();

app.get("/",function(req,res) {
    res.send("<h1>Hello ,world!</h1>");
});
app.get("/about",function(req,res){
    res.send("<h1>About me: iam a game developer and frontend developer</h1>");
});
app.get("/contact",function(req,res) {
   res.send("Contact no:+919100506398<br>Email id: saigopalbonthu@gmail.com") 
});
app.listen(3000,function() {
    console.log("server started on port 3000");
});