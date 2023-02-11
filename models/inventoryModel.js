const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InventorySchema = new Schema(
  {
    type: { type: String },
    name: {
      type: String,
      required: 'Kindly enter the Name'
    },
    description: {
      type: String,
      required: 'Kindly enter the description'
    },
    ingredients: [{ type: String, required: true }],
    tags: [{ type: String, requried: true }],

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
  { collection: 'inventory' },
  { typeKey: '$type' }
);

module.exports = mongoose.model('Inventory', InventorySchema);
