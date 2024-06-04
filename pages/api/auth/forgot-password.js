import { findUserByEmail } from '../../../utils/userStore';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Basic validation
    if (!email) {
      res.status(400).json({ message: 'Email is required' });
      return;
    }

    // Find user in the mock database
    const user = findUserByEmail(email);

    if (!user) {
      res.status(404).json({ message: 'Email does not exist' });
      return;
    }

    // In a real application, you'd send a password reset email here.
    // For mock purposes, just respond with a success message.
    res.status(200).json({ message: 'Password reset link sent' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
