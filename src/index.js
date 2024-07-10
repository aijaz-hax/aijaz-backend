import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 6000, ()=>{
          console.log(`App is listening on port ${process.env.PORT}`)
})
})
.catch((err)=>{
    console.log("MONGO db connection failed!!!",err)
})
















///  ONE APPROACH TO CONNECT ////


// import express from "express"

// const app = express()


// ;(async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//        app.on("error",(err)=>{
//         console.log("ERR",err)
//         throw err
//        })

//        app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//        })

//     }catch(err){
//         console.log("ERR",err)
//         throw err
//     }
// })()