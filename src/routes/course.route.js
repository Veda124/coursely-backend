import express from 'express';
const router = express.Router();

router.get('/course/:id', async (req, res) => {
 res.send('Course route hit');
});

router.post('/courses', async (req, res) => {
  res.send('Courses route hit');
});

export { router };