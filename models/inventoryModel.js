const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema(
  {
    name: {
      type: String,
      required: 'Kindly enter the Name'
    },
    description: {
      type: String,
      required: 'Kindly enter the description'
    },
    ingredients: [{ type: String }],
    tags: [{ type: String }],
    availability: {
      type: Boolean,
      default: true
    },
    typeofPreparation: {
      type: String,
      default: 'Made to Order'
    },
    price: {
      type: String,
      default: null
    },
    updated: {
      type: Date,
      default: new Date()
    }
  },
  { collection: 'inventory' }
);

module.exports = mongoose.model('Inventory', InventorySchema);
