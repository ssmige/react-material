import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: "string",
    required: true,
    minLength: 4,
    maxLength: 30,
  },
  email: {
    type: "string",
    required: true,
    minLength: 8,
    maxLength: 30,
  },
});

export default mongoose.model("User", UserSchema);
