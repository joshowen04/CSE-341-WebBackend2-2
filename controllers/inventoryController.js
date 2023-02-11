const mongoose = require('mongoose');
const Inventory = mongoose.model('Inventory');

list_all_inventory = function (req, res) {
  Inventory.find({}, function (err, inventory) {
    if (err) res.send(err);
    res.json(inventory);
  });
};

create_inventory = function (req, res) {
  let item = {
    name: null,
    description: null,
    ingredients: null,
    tags: null,
    availability: null,
    typeofPreparation: null,
    price: null
  };
  for (parameter in req.body) {
    //console.log(req.body[`${parameter}`]);

    item[parameter] = req.body[`${parameter}`];
    //console.log(item);
  }
  let validated = true;
  for (value in item) {
    if (item[value] === null) {
      validated = false;
      break;
    }
  }
  if (validated) {
    const new_item = new Inventory(item);
    new_item.save(function (err, item) {
      if (err) {
        res.status(400).json(err.message);
      } else {
        res.status(201).json(item['_id']);
      }
      // res.json(contact);
    });
  } else {
    res.status(400).json('Please make sure to provide all of the required values');
  }
};

update_inventory = function (req, res) {
  let item = {
    name: null,
    description: null,
    ingredients: null,
    tags: null,
    availability: null,
    typeofPreparation: null,
    price: null
  };
  for (parameter in req.body) {
    //console.log(req.body[`${parameter}`]);

    item[parameter] = req.body[`${parameter}`];
    //console.log(item);
  }
  let validated = true;
  for (value in item) {
    if (item[value] === null) {
      validated = false;
      break;
    }
  }
  if (validated) {
    Inventory.findOneAndUpdate(
      { _id: req.params.inventoryId },
      item,
      { new: true },
      function (err, item) {
        if (err) res.send(err);
        res.status(204).json({ message: 'Item successfully updated' });
      }
    );
  } else {
    res.status(400).json('Please make sure to provide all of the required values');
  }
};

read_inventory = function (req, res) {
  Inventory.findById(req.params.inventoryId, function (err, inventory) {
    if (err) res.send(err);
    res.json(inventory);
  });
};

delete_inventory = function (req, res) {
  Inventory.deleteOne({ _id: req.params.inventoryId }, function (err, item) {
    if (err) {
      res.send(err);
    } else {
      if (item.deletedCount == 0) {
        res.status(400).json({ message: 'No item exists with that ID' });
      } else {
        res.status(200).json({ message: 'Item successfully deleted' });
      }
    }
  });
};
module.exports = {
  list_all_inventory,
  read_inventory,
  create_inventory,
  update_inventory,
  delete_inventory
};
