import { Router } from 'express';

import { expenseController } from '../controllers/expense';

const router = Router();

router.get('/', expenseController.getExpenses);

router.get('/:id', expenseController.getExpenseById);

export default router;
