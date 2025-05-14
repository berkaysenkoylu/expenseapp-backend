import { Router } from 'express';
import expenseRoutes from './expense.routes';
import userRoutes from './user.routes';

const router = Router();

router.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});

router.use('/auth', userRoutes);
router.use('/expenses', expenseRoutes);

export default router;
