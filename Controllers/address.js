import { Address } from "../Models/Address.js";

export const addAddress = async (req, res) => {
  let { fullName, city, address, phoneNumber, pincode, state, country } =
    req.body;

  let userAddress = await Address.create({
    userId: req.user,
    fullName,
    city,
    address,
    phoneNumber,
    pincode,
    state,
    country,
  });


  res.json({message:"Address added",userAddress});
};




export const getAddress =async(req ,res)=>{
   let address = await Address.find({userId:req.user}).sort({createdAt:-1}).limit(1);
   res.json({message:"Address ",userAddress:address[0]});
};