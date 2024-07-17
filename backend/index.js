import express from "express";
import { PORT,mongodburl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./bookmodels.js";
import booksRoute from "./routes/booksRoute.js"
import cors from "cors";

const app=express();

app.use(express.json())

app.use(cors())

app.get('/',(req,res)=>{

})

app.use('/books',booksRoute);


mongoose
  .connect(mongodburl)
  .then(()=>{
    console.log("connected to server");
    app.listen(PORT, ()=>{
      console.log(`App is listening at ${PORT}`);
    })
  })
  .catch((err)=>{
    console.log(err)
  })