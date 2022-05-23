import { Router } from "express";
import { getTodos, updateTodo, addTodo } from "../controllers/todos";
const schemas = require("../validationSchemas");
const middleware = require("../middleware/validation");

const router: Router = Router();

router.get("/todos", getTodos);
router.post("/todo", middleware(schemas.todoPOST, "body"), addTodo);
router.put("/todo/:id", middleware(schemas.todoDETAIL, "params"), updateTodo);

export default router;
