import express from 'express';
const router = express.Router();

router.post('/signUp', (req, res) => {
  res.send('Sign-up endpoint');
});

router.post('/login', (req, res) => {
  res.send('log-in endpoint');
});

export { router };