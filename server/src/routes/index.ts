import { Router } from "express";
import {
  getTodos,
  updateTodo,
  addTodo,
  deleteTodo,
} from "../controllers/todos";
import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories";

const schemas = require("../validationSchemas");
const middleware = require("../middleware/validation");

const router: Router = Router();

router.get("/todos", getTodos);
router.post("/todo", middleware(schemas.todo, "body"), addTodo);
router.put("/todo/:id", middleware(schemas.id, "params"), updateTodo);
router.delete("/todo/:id", middleware(schemas.id, "params"), deleteTodo);

router.get("/categories", getCategories);
router.post("/category", middleware(schemas.category, "body"), addCategory);
router.put("/category/:id", middleware(schemas.id, "params"), updateCategory);
router.delete(
  "/category/:id",
  middleware(schemas.id, "params"),
  deleteCategory
);

export default router;
