var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("landing");
});

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"},
    {name: "Granite Hill", image: "https://farm4.staticflickr.com/3282/2770447094_2c64348643.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b014459cf4c671a6efbc_340.jpg"},
];

app.get("/campgrounds", function(req,res){
    
    res.render("campgrounds",{campgrounds: campgrounds});
    
});

app.post("/campgrounds",function(req,res){
   //get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   campgrounds.push(newCampground);
   
   //redirext back to campgrounds page
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req, res) {
   res.render("new.ejs");
    
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The YelpCamp Server Has Started!");
});