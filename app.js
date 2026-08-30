const express = require('express');
const { connect } = require('./db');
const app = express();
require('dotenv').config(); // Load environment variables from .env file
const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000

await connect(); // Connect to MongoDB
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});