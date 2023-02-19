//const mongoose = require('mongoose');
//const Inventory = mongoose.model('Inventory');

// list_all_inventory = function (req, res) {
//   Inventory.find({}, function (err, inventory) {
//     if (err) res.send(err);
//     res.json(inventory);
//   });
// };

//   app.get('/auth', (req, res) => {
//     res.redirect(
//       `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
//     );
//   });

authRedirect = function (req, res) {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
};

module.exports = {
  list_all_inventory
};
