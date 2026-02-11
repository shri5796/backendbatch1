import express from 'express'
import mongoose from 'mongoose'
import router from './src/route.mjs'
import { uri,PORT } from './config.mjs'
const app= express();
app.use(express.json());
app.use('/',(req,res,next)=>{
    let user='ameen';
    if(user=='ameen'){
        next();
    }else{
        return res.status(401).send({message:"you are not authorised"});
    }
})
mongoose.connect(uri).then(()=>console.log("database connected successfully")).catch((err)=>console.log(err));
app.use('/',router);
app.listen(PORT, ()=>{
    console.log(`Server Started at ${PORT}`);
})