import {User} from '../Models/User.js';
import bcrypt from 'bcryptjs';
export const register = async(req ,res)=>{
    const {name,password,email} = req.body;

    try{
        let user =await User.findOne({email});
        if(user) return res.json({message:"User already exist",success:false});

        const hashPass =await bcrypt.hash(password,10);

     user = await User.create({name,email,password:hashPass});
     res.json({message:"User registered",user,success:true});
    }catch(error){
       res.json({message:"Error occured",success:false});
    }
}