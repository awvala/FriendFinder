// Dependencies
var path = require('path');
var friendsData = require("../data/friends.js");

// ROUTING

//  API GET request will display friendsData when the usser visits the page.
module.exports = function (app) {
  app.get("/data/friends.js", function (req, res) {
    res.json(friendsData);
  });

  // API POST request submit survey data into our friends.js friendsArray.
  app.post("/data/friends.js", function (req, res) {
    console.log(here);
    var userData = req.body;
    var userAnswers = userData.scores;
    console.log(userAnswers);

    // calculate friend match
    var friendName = '';
    var friendImg = '';
    var totalDiff = 100;

    for (var i = 0; i < friendsData.lengh; i++) {
      
      var diff = 0;
      for (j = 0; j < userAnswers.lengh; j++) {
        diff += Math.abs(friendsData[i].scores[j] - userAnswers[j]);
      }
      
      // if lowest mathematical difference, update friend variables
      if (diff < totalDiff) {
        totalDiff = diff;
        friendName = friendsData[i].name;
        friendImg = friendsData[i].photo;
      }
    }
    console.log(friendName);
    friendsData.push(userData);
    res.json({status: 'ok', name: friendName, photo: friendImg});
  });
};