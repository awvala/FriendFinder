// Dependencies
var path = require('path');
var friendsData = require("../data/friends");

// ROUTING

//  API GET request will display friendsData when the usser visits the page.
module.exports = function(app) {
    app.get("/data/friends", function(req, res) {
     res.json(friendsData);   
   });

// API POST request submit survey data into our friends.js friendsArray.
   app.post("/data/friends", function(req, res) {
     friendsData.push(req.body);
// Insert logic to find best friend match.
   });
}