import { Router } from "express"
import { getTodos } from "../controllers/todos"

const router: Router = Router()

router.get("/todos", getTodos)

export default router