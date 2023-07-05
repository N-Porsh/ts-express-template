import 'express-async-errors';
import { Router } from 'express';
import { auth } from '../middlewares/auth';
import { getUserById, getUsers } from '../controllers/UserController';


const router: Router = Router();

router.get('/users', getUsers);
router.get('/users/:id', auth, getUserById);


export default router;
