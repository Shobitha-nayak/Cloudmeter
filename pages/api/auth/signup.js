import jwt from 'jsonwebtoken';
import { getUsers, addUser, findUserByEmail } from '../../../utils/userStore';

const secretKey = process.env.SECRET_KEY || 'your_secret_key'; // Use environment variable for secret key

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      res.status(400).json({ message: 'Email and password are required' });
      return;
    }

    // Check if user already exists
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      res.status(409).json({ message: 'User already exists' });
      return;
    }

    // Create new user
    const newUser = {
      id: getUsers().length + 1,
      email,
      password,
      role: 'user', // Default role for new users
    };

    // Add new user to the mock database
    addUser(newUser);

    // Generate JWT token
    const token = jwt.sign({ id: newUser.id, email: newUser.email, role: newUser.role }, secretKey, { expiresIn: '1h' });

    // Respond with the token
    res.status(201).json({ token });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
