const mongoose = require('mongoose');

const { Schema } = mongoose;

const supplierSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  contactInfo: {
    phone: String,
    email: String,
    address: String,
    fiscalId: String,
    websiteURL: String,
  },
  // other fields like rating, contract details, etc., can be added
});

// Virtuals for Supplier
supplierSchema.virtual('itemsSupplied', {
  ref: 'Item',
  localField: '_id',
  foreignField: 'supplier',
  count: true,
});

supplierSchema.virtual('url').get(function () {
  return `/suppliers/${this._id}`;
});

module.exports = mongoose.model('Supplier', supplierSchema);
