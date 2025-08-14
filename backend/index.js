import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModels.js"; 
import booksRoute from "./routes/booksRoute.js";
import cors from"cors";
const app = express();
//parsing request body
app.use(express.json());
//use cors middleware
app.use( cors({
    origin:"http://localhost:5173",
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type']
  })
);
app.get('/', (request, response) => {
  console.log(request);
  return response.status(200).send("Welcome to my first MERN STACK PROJECT");
});
app.use('/api/books',booksRoute);
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to mongo");
    app.listen(PORT,() => {
      console.log(`APP is listening on port ${PORT}`);
    });
  })
 
  .catch((error) => {
    console.log(error);
  });
