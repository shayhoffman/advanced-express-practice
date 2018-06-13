const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://shayhoffman:nalarocks1@ds257640.mlab.com:57640/aca-express-practice-4");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());



let ContactRoutes = require("./routes/ContactRoutes");
app.use(ContactRoutes);

let VehicleRoutes = require("./routes/VehicleRoutes");
app.use(VehicleRoutes);

let CommentRoutes = require("./routes/CommentRoutes");
app.use(CommentRoutes);

let ProductRoutes = require("./routes/ProductRoutes");
app.use(ProductRoutes);




//server listening on port 3001
app.listen(3001, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now living in apartment 3001");
  });

