import { Router } from "express"
import { getTodos, updateTodo, addTodo } from "../controllers/todos"

const router: Router = Router()

router.get("/todos", getTodos)
router.put("/todo/:id", updateTodo)
router.post("/todo", addTodo)

export default router