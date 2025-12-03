import {User} from '../Models/User.js';
import bcrypt from 'bcryptjs';



//user register


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
};



//user login


export const login =async(req ,res)=>{
      const {email,password} = req.body;
    try{
         let user =await User.findOne({email});
         if(!user )return resjson({message:"USer not found",success:false});

         const validPassword =await bcrypt.compare(password,user.password);

         if(!validPassword) return res.json({message:"Invalid credentials ",success:false});

         res.json({message:`welcome ${user.name}`,success:true,user});

    }catch(error){
       res.json({message:error.message});
    }
};

// get all users


export const users=async(req ,res)=>{
     try{
       let users = (await User.find()).toSorted({createdAt:-1});
       res.json(users);
     } catch(error){
            res.json(error.message);
     }
};

