import express from 'express';
import mongoose from 'mongoose';
//import bodyParser from 'mongoose';
import userRouter from './Routes/user.js';
import productRouter from './Routes/product.js';
import cartRouter from './Routes/cart.js';
import addressRouter from './Routes/address.js';


const app=express();
app.use(express.json());


//user router

app.use('/api/user',userRouter);

app.use('/api/product',productRouter);


app.use('/api/cart',cartRouter);


app.use('/api/address',addressRouter);


mongoose.connect("mongodb+srv://=-0reshupatel3645_db_user:gRbFcNI3lywhwe1N@cluster0.zkphofu.mongodb.net/",{dbName:"Mern_E_Commerce"}).then(()=>console.log("Mongoose Connected successfully....")).catch((error)=>{console.log(error)});
const port=1000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})