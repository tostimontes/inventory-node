// Require controllers and add routes for CRUD GET/POST
const express = require('express');

const router = express.Router();

const itemController = require('../controllers/itemController');
const categoryController = require('../controllers/categoryController');
const supplierController = require('../controllers/supplierController');

// ROUTES //

// GET dashboard
router.get('/', itemController.dashboard);

// // ! ITEM //
// // * READ //
// // GET
// router.get('/inventory/items', itemController.item_list);
// router.get('/inventory/item/:id/detail', itemController.item_detail);
// // * CREATE //
// // GET
// router.get('/inventory/item/create', itemController.item_create_get);
// // POST
// router.post('/inventory/item/create', itemController.item_create_post);
// // * UPDATE //
// // GET
// router.get('/inventory/item/:id/update', itemController.item_update_get);
// // POST
// router.post('/inventory/item/:id/update', itemController.item_update_post);
// // * DELETE //
// // GET
// router.get('/inventory/item/:id/delete', itemController.item_delete_get);
// // POST
// router.post('/inventory/item/:id/delete', itemController.item_delete_post);

// // ! CATEGORY //
// // * READ //
// // GET
// router.get('/inventory/categories', categoryController.category_list);
// router.get(
//   '/inventory/category/:id/detail',
//   categoryController.category_detail
// );
// // * CREATE //
// // GET
// router.get(
//   '/inventory/category/create',
//   categoryController.category_create_get
// );
// // POST
// router.post(
//   '/inventory/category/create',
//   categoryController.category_create_post
// );
// // * UPDATE //
// // GET
// router.get(
//   '/inventory/category/:id/update',
//   categoryController.category_update_get
// );
// // POST
// router.post(
//   '/inventory/category/:id/update',
//   categoryController.category_update_post
// );
// // * DELETE //
// // GET
// router.get(
//   '/inventory/category/:id/delete',
//   categoryController.category_delete_get
// );
// // POST
// router.post(
//   '/inventory/category/:id/delete',
//   categoryController.category_delete_post
// );

// // ! SUPPLIER //
// // * READ //
// // GET
// router.get('/inventory/suppliers', supplierController.supplier_list);
// router.get(
//   '/inventory/supplier/:id/detail',
//   supplierController.supplier_detail
// );
// // * CREATE //
// // GET
// router.get(
//   '/inventory/supplier/create',
//   supplierController.supplier_create_get
// );
// // POST
// router.post(
//   '/inventory/supplier/create',
//   supplierController.supplier_create_post
// );
// // * UPDATE //
// // GET
// router.get(
//   '/inventory/supplier/:id/update',
//   supplierController.supplier_update_get
// );
// // POST
// router.post(
//   '/inventory/supplier/:id/update',
//   supplierController.supplier_update_post
// );
// // * DELETE //
// // GET
// router.get(
//   '/inventory/supplier/:id/delete',
//   supplierController.supplier_delete_get
// );
// // POST
// router.post(
//   '/inventory/supplier/:id/delete',
//   supplierController.supplier_delete_post
// );

module.exports = router;
