const router = require('express').Router();
const Product = require('../models/productModel');

//Create User
router.post('/', async (req, res) => {
  try {
    // Write a code here to save a document of a product
    //Information which is to be stored in DB name,description,price,category
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
