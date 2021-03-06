import { Response, Request } from "express"
import { ITodo } from "../../types/todo"
import Todo from "../../models/todo"

export const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: ITodo[] = await Todo.find()
        res.status(200).json({ todos })
    } catch (error) {
        throw error
    }
}
