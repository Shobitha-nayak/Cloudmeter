import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '../../../utils/userStore';

const secretKey = 'your_secret_key'; // Store this securely, preferably in environment variables

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Fetch user by email
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare hashed password with provided password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, secretKey, { expiresIn: '1h' });

    // Return token to client
    res.status(200).json({ token });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
