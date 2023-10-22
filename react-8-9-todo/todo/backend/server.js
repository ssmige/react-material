import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes.js";

dotenv.config();

const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
