import { Products } from "../Models/Product.js";

// add product

export const addProduct = async (req, res) => {
  const { title, description, price, category, qty, imgSrc } = req.body;
  try {
    let product = await Products.create({
      title,
      description,
      price,
      category,
      qty,
      imgSrc,
    });
    res.json({
      message: "Product added successfully....!",
      success: true,
      product,
    });
  } catch (error) {
    res.json(error.message);
  }
};


// get all the products

export const getProducts = async (req ,res)=>{
  let getProduct=(await Products.find()).toSorted({createdAt:-1});
  res.json({message:"All the Products ",success:true,getProduct});
};


// get product by id

export const getProductById = async (req ,res)=>{
  const id= req.params.id;
  let product = await Products.findById(id);
  if(!product) res.json({message:"NOt Found ",success:false});

  res.json({message:"Specific product ",success:true,product});


}



//get and update by id 

export const updateProductById = async(req,res)=>{
  const id=req.params.id;
  let product = await Products.findByIdAndUpdate(id,{new:true});

  if(!product) res.json({message:"Not Found ",success:false});


}




// delete a product by id

export const deleteProductById = async(req ,res)=>{
  const id = req.params.id;

  let product = await Products.findByIdAndDelete(id);
  if(!product) return res.json({message:"Not Found",success:false});

  return res.json({message:"Deleted",product});




}