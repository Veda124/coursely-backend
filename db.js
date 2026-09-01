import mongoose from 'mongoose';
import 'dotenv/config'; // Load environment variables from .env file

// Connect to MongoDB
const connect = () => {
   return mongoose.connect(process.env.MONGO_URI);
}


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export { connect };