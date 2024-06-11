import express from 'express';
<<<<<<< HEAD
import {signupUser} from '../controller/user-controller.js';
const router = express.Router();
router.post('/signup', signupUser);
=======
import {signupUser,loginuser} from '../controller/user-controller.js';
const router = express.Router();
router.post('/signup', signupUser);
router.post('/login', loginuser);
>>>>>>> df3e532e935ced4777e3cd8751fa5d11b2c045c8

export default router;
