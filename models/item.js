const mongoose = require('mongoose');

const { DateTime } = require('luxon');

const { Schema } = mongoose;

const itemSchema = new Schema({
  // Basic Item Information
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: '',
  },
  unit: {
    type: String,
    required: true,
    enum: ['kg', 'liters', 'pack', 'unit', 'other'],
  },
  tags: [String],

  // Relational Data
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  supplier: {
    type: Schema.Types.ObjectId,
    ref: 'Supplier',
  },
  tenantId: {
    type: Schema.Types.ObjectId,
    ref: 'Tenant',
    // required: true,
  },

  // Stock Management
  numberInStock: {
    type: Number,
    required: true,
    min: 0,
  },
  minimumRequired: {
    type: Number,
    min: 0,
  },

  // Tracking Changes
  lastUpdateDate: {
    type: Date,
    default: Date.now,
  },
  lastUpdateBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  // Additional Attributes
  pricePerUnit: {
    type: Number,
    min: 0,
  },
  imageUrl: {
    type: String,
    default: '',
  },
});

itemSchema.virtual('url').get(function () {
  return `/items/${this._id}`;
});

module.exports = mongoose.model('Item', itemSchema);
