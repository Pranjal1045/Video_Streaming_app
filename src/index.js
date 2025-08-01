//require("dotenv").config({path : "./env"});
import connectDB from "./db/index.js";
import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config({
    path : "./.env"
})

connectDB()
.then(() => {
    app.on("err",(err) => {
        console.log("ERR",err);
        throw err
    })
    app.listen(process.env.PORT || 8000,() => {
        console.log(`app is listening on port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("ERRR" , err);
    throw err;
})






























// ( async() => {
//       try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("ERROR",(error) =>{
//              console.log("ERROR" , error);
//              throw error;
//         app.listen(process.env.PORT,() => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//         })
//       } catch(error){
//         console.error('ERROR : ',error);
//         throw error;
//       }
// })()

