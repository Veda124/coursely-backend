import express from 'express';
import { connect } from './db.js'; // Import the connect function from db.js
const app = express();
import 'dotenv/config'; // Load environment variables from .env file
const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000
import { router as authRoutes } from './src/routes/auth.route.js'; // Import the auth routes

app.use(express.json()); // Middleware to parse JSON request bodies
app.use('/api/auth', authRoutes); // Use the auth routes for /api/auth endpoints

connect().then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
