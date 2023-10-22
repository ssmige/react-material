import express from "express";
import {
  addTodo,
  getTodos,
  deleteTodoById,
  updateTodoById,
} from "./controllers.js";

const router = express.Router();

router.get("/todos", getTodos);

router.post("/todos", addTodo);

router.delete("/todos/:id", deleteTodoById);

router.put("/todos/:id", updateTodoById);

export default router;
