import mongoose from "mongoose";
import Todo from "./models/Todo.js";
// import User from "./models/User.js";

export async function addTodo(req, res) {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }
  try {
    const newTodo = new Todo({
      title,
      description,
    });

    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getTodos(req, res) {
  try {
    const todos = await Todo.find({}, { __v: 0 });

    // const result = todos.map((todo) => ({
    //   title: todo.title,
    //   description: todo.description,
    //   id: todo._id,
    // }));
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteTodoById(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  try {
    const response = await Todo.findByIdAndDelete(id);
    if (response) {
      res.status(200).json({ message: `todo with id ${id} deleted` });
    } else {
      res.status(404).json({ message: `todo with id ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateTodoById(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.state(400).json({ message: "Invalid id" });
  }
  try {
    const todo = await Todo.findById(id);
    todo.isFinished = !todo.isFinished;
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
