import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'mongoose';
import userRouter from './Routes/user.js';


const app=express();
app,use(bodyParser.json());


//user router

app.use('/api/user',userRouter);





mongoose.connect("mongodb+srv://=-0reshupatel3645_db_user:gRbFcNI3lywhwe1N@cluster0.zkphofu.mongodb.net/",{dbName:"Mern_E_Commerce"}).then(()=>console.log("Mongoose Connected successfully....")).catch((error)=>{console.log(error)});
const port=1000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})