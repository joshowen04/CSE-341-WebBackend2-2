const mongoose = require('mongoose');
const User = mongoose.model('Users');

list_all_users = function (req, res) {
  try {
    User.find({}, function (err, user) {
      if (err) res.send(err);
      res.json(user);
    });
  } catch (error) {
    console.error(error);
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }
};

create_user = function (req, res) {
  console.log('create_user function');
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    userLevel: req.body.userLevel,
    address: req.body.address
  };
  const new_user = new User(user);
  new_user.save(function (err, user) {
    if (err) res.send(err);
    res.status(201).json(user['_id']);
    // res.json(contact);
  });
};

module.exports = {
  list_all_users,
  create_user
};
