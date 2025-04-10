// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";
import connectDB from "./db/dbconnect.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

// Approach2 : take a file from other folder and import here to connect database
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at PORT: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed", err);
  });

// Approach 1 to connect database
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO}/{DB_NAME}`);
//     app.on("errer", (err) => {
//       consolr.log("error ", err);
//       throw err;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on PORT : ${process.env.port}`);
//     });
//   } catch (err) {
//     console.error("Error: ", MONGODB_URI);
//     throw err;
//   }
// })();
