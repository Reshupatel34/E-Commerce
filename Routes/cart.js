import express from "express";
import {addToCart,userCart,removeProductFromCart,clearCart,decreaseProductQty} from '../Controllers/cart.js';
import {Authenticated} from '../Middlewares/Auth.js';


const router= express.Router();


//add an endpoint for add to cart
router.post('/add',Authenticated,addToCart);


// get user cart
router.get('/user',Authenticated,userCart);

//remove product form cart
router.delete('/remove/:productId',Authenticated,removeProductFromCart);

//clear cart
router.delete('/clear',Authenticated,clearCart);

//decrease cart itemby id
router.post('/--qty',Authenticated,decreaseProductQty);

export default router;