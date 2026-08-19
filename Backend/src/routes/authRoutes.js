import { Router } from 'express';
import { login, register } from '../controllers/authController.js';
import { requireFields, validateRegistration } from '../middleware/validate.js';

const router = Router();
router.post('/register', requireFields('name', 'email', 'password'), validateRegistration, register);
router.post('/login', requireFields('email', 'password', 'role'), login);
export default router;
