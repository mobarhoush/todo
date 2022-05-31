import { Router } from 'express'
import { getTodos, updateTodo, addTodo, deleteTodo } from '../controllers/todos'
import validationSchemas from '../validationSchemas'
import validationMiddleware from '../middleware/validation'

const router: Router = Router()

router.get('/todos', getTodos)
router.post(
  '/todo',
  validationMiddleware(validationSchemas.todo, 'body'),
  addTodo
)
router.put(
  '/todo/:id',
  validationMiddleware(validationSchemas.id, 'params'),
  updateTodo
)
router.delete(
  '/todo/:id',
  validationMiddleware(validationSchemas.id, 'params'),
  deleteTodo
)

export default router
