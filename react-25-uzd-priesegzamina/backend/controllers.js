import mongoose from "mongoose";
import User from "./models/User.js";

export async function createUser(req, res) {
  const { name, email, password } = req.body;

  try {
    const user = new User({
      name,
      email,
      password,
    });

    await user.save();
    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
