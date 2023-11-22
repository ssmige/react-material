import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLenght: 1,
    maxLenght: 300,
  },
  price: {
    type: Number,
    require: true,
    min: 0.01,
  },
  description: {
    type: String,
    minLenght: 1,
    maxLenght: 300,
  },
  expirationDate: {
    type: Date,
  },
  amount: {
    type: Number,
    min: 0,
    defaul: 0,
  },
});

export default mongoose.model("Product", productSchema);
