const mongoose = require('mongoose');
const Inventory = mongoose.model('Inventory');

list_all_inventory = function (req, res) {
  Inventory.find({}, function (err, inventory) {
    if (err) res.send(err);
    res.json(inventory);
  });
};

create_inventory = function (req, res) {
  const item = {
    name: req.body.name,
    description: req.body.description,
    ingredients: req.body.ingredients,
    tags: req.body.tags,
    availability: req.body.availability,
    typeofPreparation: req.body.typeofPreparation,
    price: req.body.price
  };
  const new_item = new Inventory(item);
  new_item.save(function (err, item) {
    if (err) res.send(err);
    res.status(201).json(item['_id']);
    // res.json(contact);
  });
};

module.exports = {
  list_all_inventory,
  // ,  read_a_contact
  create_inventory
  // ,  update_a_contact
  // ,  delete_a_contact
};
