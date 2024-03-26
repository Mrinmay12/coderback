import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database.js";
import AdminRoutes from "./Routes/AdiminRoutes.js"
dotenv.config()
const app=express()
const PORT=process.env.PORT 
app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())
app.use(bodyParser.json({ limit: '10mb' }))
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });


app.use("/code/api",AdminRoutes)

const start =async()=>{
    try{
await connectDB()
app.listen(PORT,()=>{
    console.log("App start "+PORT)

})

    }catch(err){console.log(err)}
}
start()