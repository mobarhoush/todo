import { Router } from 'express'
import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory
} from '../controllers/categories'
import validationSchemas from '../validationSchemas'
import validationMiddleware from '../middleware/validation'

const router: Router = Router()

router.get('/categories', getCategories)
router.post(
  '/category',
  validationMiddleware(validationSchemas.category, 'body'),
  addCategory
)
router.put(
  '/category/:id',
  validationMiddleware(validationSchemas.id, 'params'),
  updateCategory
)
router.delete(
  '/category/:id',
  validationMiddleware(validationSchemas.id, 'params'),
  deleteCategory
)

export default router
