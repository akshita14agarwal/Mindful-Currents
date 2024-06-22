import express from 'express';
import { signupUser, loginuser } from '../controller/user-controller.js';
import {uploadImage, getImage} from '../controller/image-controller.js';
import { createPost } from '../controller/post-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';

import upload from '../utils/uplaod.js';

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginuser);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/create', authenticateToken, createPost);


export default router;
