
import { Router } from 'express';
import { CategoryController } from "../Controllers/index";
import CategoryValidation from '../Middleware/Validation/CategoryValidation';

const router: Router = Router();
const Validation = new CategoryValidation();
router.get('/', CategoryController.list);
router.post('/create', Validation.createCategory, CategoryController.create);
router.get('/:id', CategoryController.getCategoryById);
router.put('/:id/update', Validation.createCategory, CategoryController.update);
router.delete('/:id', CategoryController.delete);

export const categoryRoutes: Router = router;