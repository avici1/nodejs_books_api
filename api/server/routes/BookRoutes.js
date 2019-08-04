import { Router } from 'express';
import BookController from '../controllers/BookController';
const router = Router();

router.get('/', BookController.getAllBook);
router.post('/', BookController.AddBooks);
router.get('/:id', BookController.findOneBook);
router.put('/:id', BookController.UpdateBooks);
router.delete('/:id', BookController.deleteOneBook);


export default router;