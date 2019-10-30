var express = require("express");

var app = express();

var mongoose = require("mongoose");

var dbUrl = "mongodb://admin:admin123@127.0.0.1:27017/messages"


var server = app.listen(27017, () => {
 console.log("server is running on port", server.address().port);
});

mongoose.connect(dbUrl , (err) => {
   console.log("mongodb connected",err);
})

var Message = mongoose.model("Message",{ name : String, message : String})


app.use(express.static(__dirname));
