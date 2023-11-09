import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.js";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
