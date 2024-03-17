const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
});

// Virtuals for Category
categorySchema.virtual('itemCount', {
  ref: 'Item',
  localField: '_id',
  foreignField: 'category',
  count: true, // Only count the number of items, don't return their details
});

categorySchema.virtual('url').get(function () {
  return `/categories/${this._id}`;
});


module.exports = mongoose.model('Category', categorySchema);
