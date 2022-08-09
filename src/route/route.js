const express = require('express')
const router = express.Router();
const { getUser, createUser, loginUser, updateUserDetail } = require("../controller/userController")
const { authenticate } = require("../middleware/auth")
const { getproductbyfilter, createProduct, getProductById, updateProductDetail, deleteProductById } = require("../controller/productController")
const { createCart, updateCart, getCart, deleteCart } = require("../controller/cartController")
const { createOrder, updateOrder } = require("../controller/orderController")

//================================================================================================

//---FEATURE I - User--------//
router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/user/:userId/profile', authenticate, getUser)
router.put('/user/:userId/profile', authenticate, updateUserDetail)
//================================================================================================

//---- FEATTURE II - Product ------//
router.post('/products', createProduct)
router.get('/products', getproductbyfilter)
router.get('/products/:productId', getProductById)
router.put('/products/:productId', updateProductDetail)
router.delete('/products/:productId', deleteProductById)
//================================================================================================

//---- FEATTURE III - Cart ------//
router.post('/users/:userId/cart',authenticate, createCart)
router.put("/users/:userId/cart",authenticate, updateCart)
router.get('/users/:userId/cart',authenticate, getCart)
router.delete('/users/:userId/cart',authenticate, deleteCart)
//================================================================================================

//---- FEATURE IV ORDER ------//
router.post("/users/:userId/orders",authenticate, createOrder)
router.put("/users/:userId/orders",authenticate, updateOrder)


//================= BAD URL VALIDATION ============================================
router.all("*", (req, res) => {
    res.status(404).send({ msg: "NOT FOUND THIS URL" })
})


module.exports = router;
