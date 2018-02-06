const User = require('../models/user');



exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  
  // see if a user with a given email exists because we dont want duplicates

  User.findOne({ email: email }, function(err, existingUser) {

  });
  // if they do exist return error
  

  // if they do not exist , create and save user record

  // respond to request indicating the user was created 

  
}