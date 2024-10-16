import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';


// app Config
const app = express();
const port = process.env.PORT || 5000
connectDB();
connectCloudinary();

// MiddleWares
app.use(express.json());
app.use(cors());

//api endpoints
app.get('/',(req,res)=>{
    res.send('API WORKING');
})

app.listen(port,()=>{
    console.log("server started ",port);
});