import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentialS: true,
  })
);

app.use(express.json({ limit: "16kb" }));

// data from url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// use to store file or folder locally
app.use(express.static("public"));

app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);
//http://localhost:8000/api/v1/users/register(or other routes)

export { app };
