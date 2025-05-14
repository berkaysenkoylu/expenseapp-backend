import { Router } from 'express';

import { userController } from '../controllers/user';

const router = Router();

router.get('/', userController.getUsers);

router.post('/signup', userController.signup);

export default router;
