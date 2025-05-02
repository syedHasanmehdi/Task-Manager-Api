import {Router} from 'express';
import {login, register} from '../controller/user.controller.js';

// eslint-disable-next-line new-cap
const router=Router();

router.post('/register', register);
router.post('/login', login);


export default router;
