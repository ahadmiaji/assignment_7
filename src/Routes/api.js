const express = require('express');
const router = express.Router();

const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');
const projectController = require('../Controllers/projectController');
const serviceController = require('../Controllers/serviceController');
const titleController = require('../Controllers/titleController');

//blog routes
router.get('/blogCreate', blogController.create);
router.get('/blogRead', blogController.read);
router.get('/blogDelete', blogController.delete);
router.get('/blogUpdate', blogController.update);

//blog details routes
router.get('/blogDetails/create', blogDetailsController.create);
router.get('/blogDetails/read', blogDetailsController.read);
router.get('/blogDetails/update', blogDetailsController.update);
router.get('/blogDetails/delete', blogDetailsController.delete);

// comment Controller routes
router.get('/comment/create', commentController.create);
router.get('/comment/read', commentController.read);
router.get('/comment/update', commentController.update);
router.get('/comment/delete', commentController.delete);

// message Controller routes
router.get('/message/create', messageController.create);
router.get('/message/read', messageController.read);
router.get('/message/update', messageController.update);
router.get('/message/delete', messageController.delete);

// portfolio Controller routes
router.get('/portfolio/create', portfolioController.create);
router.get('/portfolio/read', portfolioController.read);
router.get('/portfolio/update', portfolioController.update);
router.get('/portfolio/delete', portfolioController.delete);

// product Controller routes
router.get('/product/create', productController.create);
router.get('/product/read', productController.read);
router.get('/product/update', productController.update);
router.get('/product/delete', productController.delete);

// profit Controller routes
router.get('/profit/create', profitController.create);
router.get('/profit/read', profitController.read);
router.get('/profit/update', profitController.update);
router.get('/profit/delete', profitController.delete);

// project Controller routes
router.get('/project/create', projectController.create);
router.get('/project/read', projectController.read);
router.get('/project/update', projectController.update);
router.get('/project/delete', projectController.delete);

// service Controller routes
router.get('/service/create', serviceController.create);
router.get('/service/read', serviceController.read);
router.get('/service/update', serviceController.update);
router.get('/service/delete', serviceController.delete);

// title Controller routes
router.get('/title/create', titleController.create);
router.get('/title/read', titleController.read);
router.get('/title/update', titleController.update);
router.get('/title/delete', titleController.delete);

module.exports = router;