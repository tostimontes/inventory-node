// TODO: each item view will have an input and an update button to update number (or other inputs (which will be displayed on edit item?))
const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const item = require('../models/item');
const category = require('../models/category');
const supplier = require('../models/supplier');

exports.dashboard = asyncHandler(async (req, res, next) => {
  // Get categories and suppliers and render them (show inventory as a link only)
  res.render('dashboard', {});
});

exports.item_list = asyncHandler(async (req, res, next) => {
  const items = await item.find({});
  res.render('itemList', { items });
});

exports.item_detail = asyncHandler(async (req, res, next) => {
  const item = await item.findById(req.params.id);
  res.render('itemDetail', { item });
});

exports.item_create_get = asyncHandler(async (req, res, next) => {
  res.render('itemCreate');
});

exports.item_create_post = [
  body('name', 'Name is required').trim().isLength({ min: 1 }),
  body('quantity', 'Quantity is required').isNumeric(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errors = validationResult(req);
      return res.status(400).render('itemCreate', { errors: errors.array() });
    }
    const item = new item({
      name: req.body.name,
      quantity: req.body.quantity,
    });
    await item.save();
    res.redirect('/inventory/items');
  }),
];

exports.item_update_get = asyncHandler(async (req, res, next) => {
  const item = await item.findById(req.params.id);
  res.render('itemUpdate', { item });
});

exports.item_update_post = [
  asyncHandler(async (req, res, next) => {
    const item = await item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect(`/inventory/item/${item._id}/detail`);
  }),
];

exports.item_delete_get = asyncHandler(async (req, res, next) => {
  const item = await item.findById(req.params.id);
  res.render('itemDelete', { item });
});

exports.item_delete_post = asyncHandler(async (req, res, next) => {
  await item.findByIdAndRemove(req.params.id);
  res.redirect('/inventory/items');
});
