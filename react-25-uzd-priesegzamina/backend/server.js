import express from "express";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error));

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
