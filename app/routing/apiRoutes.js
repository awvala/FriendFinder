// Dependencies
var friends = require('../data/friends.js');

// ROUTING
//  API GET request will display friends when the user visits the page.
module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  // API POST request submit survey data into our friends.js friendsArray.
  app.post('/api/friends', function (req, res) {

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    var userData = req.body;
    var userScores = userData.scores;
    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++) {
      totalDifference = 0;

      for (var j = 0; j < friends[i].scores; j++) {
        totalDifference += Math.abs(friends[i].scores[j] - userScores[j]);
      }

      // if lowest mathematical difference, update friend variables
      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
    friends.push(userData);
    res.json({ status: 'ok', name: bestMatch.name, photo: bestMatch.photo });
  });
};