// Dependencies
var path = require('path');
var friendsData = require("../data/friends.js");

// ROUTING

//  API GET request will display friendsData when the usser visits the page.
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // API POST request submit survey data into our friends.js friendsArray.
  app.post("/api/friends", function (req, res) {
    console.log(here);
    var userData = req.body;
    var userAnswers = userData.scores;

    // calculate friend match
    var friendName = '';
    var friendImg = '';
    var totalDiff = 100;

    for (var i = 0; i < friends.lengh; i++) {
      
      var diff = 0;
      for (j = 0; j < userAnswers.lengh; j++) {
        diff += Math.abs(friends[i].scores[j] - userAnswers[j]);
      }
      
      // if lowest mathematical difference, update friend variables
      if (diff < totalDiff) {
        totalDiff = diff;
        friendName = friends[i].name;
        friendImg = friends[i].photo;
      }
    }
    friends.push(userData);
    res.json({status: 'ok', name: friendName, photo: friendImg});
  });
};