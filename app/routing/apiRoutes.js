// LOAD DATA
// Link our routes to the Friends.js data arrays.

var friendsData = require("../data/friends");

// ROUTING

//  API GET request will display friendsData when the usser visits the page.
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
     res.jason(friendsData);   
   });

// API POST request submit survey data into our friends.js friendsArray.
   app.post("/api/friends", function(req, res) {
     friendsData.push(req.body);
// Insert logic to find best friend match.
   });
}

//This Module Also Exports Bands Object 
module.exports.friends = {
	friends
}