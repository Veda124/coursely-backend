import express from 'express';
const router = express.Router();
import {register,login} from '../controllers/auth.controller.js';
import { authorize } from '../middleware/authorize.js';
router.post('/signUp', async (req, res) => {
 return await register(req, res);
});

router.post('/login', async (req, res) => {
  console.log('Login route hit');
  return await login(req, res);
});

router.get('/test', async (req, res) => {
  let token = req.headers.authorization;
  console.log('Token received:', token);
  await authorize(req, res, () => {
    let userId = req.userId; // Assuming authorize middleware sets req.userId
    console.log('User ID from token:', userId);
    res.json({ message: 'Test route is working!' });
  });
});
export { router };