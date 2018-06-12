let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());


//express routes to get all things
app.get("/contacts", function(req,res,next) 
{
    return res.json(contacts);
});

app.get("/vehicles", function(req,res,next) 
{
    return res.json(vehicles);
});

app.get("/comments", function(req,res,next) 
{
    return res.json(comments);
});

app.get("/products", function(req,res,next) 
{
    return res.json(products);
});


//express routes to get one thing or ids 

app.get("/contacts/:id", function(req,res,next){
    const contactId = contacts.find(user => user._id == req.params.id);
    return res.json(contactId);
});

app.get("/vehicles/:id", function(req,res,next){
    const vehicleId = vehicles.find(user => user._id == req.params.id);
    return res.json(vehicleId);
});

app.get("/comments/:id", function(req,res,next){
    const commentsId = comments.find(user => user._id == req.params.id);
    return res.json(commentsId);
});

app.get("/products/:id", function(req,res,next){
    const productsId = products.find(user => user._id == req.params.id);
    return res.json(productsId);
});


//express routes to create one thing
app.post("/contacts", function (res,req,next){
    return res.json(contacts.push({}));
});

app.post("/vehicles", function (res,req,next){
    return res.json(vehicles.push({}));
});

app.post("/comments", function (res,req,next){
    return res.json(comments.push({}));
});

app.post("/products", function (res,req,next){
    return res.json(products.push({}));
});




//server listening on port 3001
app.listen(3001, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now living in apartment 3001");
  });

