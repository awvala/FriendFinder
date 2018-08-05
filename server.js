// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");

// Sets up the Express App
// process.env.PORT lets the port be set by Heroku
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening / Dynamically Assigned or Static
// =============================================================
app.listen(process.env.PORT || PORT, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});