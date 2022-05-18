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
    res.status(201).json({ response });
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
    const id = req.params.id;
    const todo: ITodo = req.body;
    const response: ITodo | null = await Todo.findByIdAndUpdate(id, todo);
    if (!response) {
      throw new Error();
    }
    res.status(200).json({
      message: "Todo has been updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update todo.",
    });
    throw error;
  }
};
