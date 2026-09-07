import bcrypt from 'bcrypt';
import { User } from '../models/user.model.js';
import {generateAuthToken} from '../middleware/authorize.js';
export async function registerUser(username, email, password) {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const error = new Error('User already exists');
    error.statusCode = 409; // controller will read this
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPassword });
  return user;
}

export async function loginUser(email, password) {
  const user = await User.findOne({ email });
  if (!user) {  
    return null; // controller will handle this
  }
  let isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return null; // controller will handle this
  }
  let token = generateAuthToken();
  return { user, token };
}