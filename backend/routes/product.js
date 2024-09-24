const express = require("express");
const  router =  express.Router();



const {getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct} = require('../controllers/productController')

//get api
router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProduct);

//post api
router.route('/admin/product/new').post(newProduct);

//put
router.route('/admin/product/:id').put(updateProduct);

//delete
router.route('/admin/product/:id').delete(deleteProduct);


module.exports = router;