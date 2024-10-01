import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import dotenv  from "dotenv";
const app = express();
app.use (bodyParser.json());
dotenv.config();
const PORT = process.env.PORT||7000;
const MONGOURL =process.env.MONGO_URL;
console.log(PORT)
console.log(MONGOURL)
mongoose
.connect (MONGOURL)
.then(()=> {
console.log("Database connected successful.");
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
   });
})
.catch((error)=>console.log(error));
