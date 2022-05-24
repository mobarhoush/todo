import { Response, Request } from "express";
import { ITodo } from "../../types/todo";
import Todo from "../../models/todo";

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
};

export const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo = req.body;
    const response: ITodo = await Todo.create(todo);
    res
      .status(201)
      .json({ message: "todo created successfully", data: response });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add todo.",
    });
    throw error;
  }
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const todo: ITodo = req.body;
    const response = await Todo.updateOne({ _id: id }, todo);
    if (!response) {
      throw new Error();
    }
    res.status(200).json({
      message: "Todo has been updated successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update todo.",
    });
    throw error;
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const response = await Todo.deleteOne({ _id: id });
    if (!response?.deletedCount) {
      res.status(400).json({ message: "This todo doesn't exists" });
    }
    res.status(200).json({
      message: "Todo has been deleted successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete todo.",
    });
    throw error;
  }
};
