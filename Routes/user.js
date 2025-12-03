import express from 'express';
import {register,login,users} from '../Controllers/user.js';


const router = express.Router();


router.post('/register',register);


router.post('./login',login);


router.get('/all',users);

export default router;