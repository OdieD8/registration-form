var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var registrationCtrl = require("./server/features/registration/registration.server.controller");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("client"));

app.post("/api/register", registrationCtrl.register);
app.post("/api/send-mail", registrationCtrl.createDoc, registrationCtrl.sendMail);

var db = "mongodb://localhost:27017/registration-form";
mongoose.Promise = global.Promise;
mongoose.connect(db);
mongoose.connection.once("open", function() {
    console.log("connected to MongoDB at", db);
});

var port = process.env.PORT || 8550;
app.listen(port, function() {
    console.log("listening on port: ", port);
});