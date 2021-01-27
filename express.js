// server side
const express = require("express");
// express server
const app = express();
//  nodejs
const server = require("http").Server(app);
// nodejs => socket enabled
const path = require("path");
// serve static assets to client
app.use(express.static("public"));
// server

// nodejs server
const port = process.env.PORT || 4000;
server.listen(port, function(req, res) {
  console.log("Server has started at port 4000");
});
