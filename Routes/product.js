import express from 'express';
import {addProduct,getProducts,getProductById,updateProductById,deleteProductById} from '../Controllers/product.js';


const router=express.Router();



//add product
router.post('/add',addProduct);

// get product
router.get('/all',getProducts);

// get product by id
router.get('/:id',getProductById);

// get product by id nad update 
router.put('/:id',updateProductById);


// get product by id and delete
router.delete('/:id',deleteProductById);

export default router;