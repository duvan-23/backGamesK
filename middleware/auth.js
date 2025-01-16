import jwt from 'jsonwebtoken';
import 'dotenv/config';

const SECRET_KEY = process.env.SECRET_KEY; // Secure key

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract Bearer token

  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No Token Provided!' });
  }

  try {
    jwt.verify(token, SECRET_KEY); // Verify token
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(403).json({ message: 'Unauthorized' });
  }
};

export const createToken = (payload, expiresIn = '1h') => {
    try {
      const token = jwt.sign(payload, SECRET_KEY, { expiresIn }); // Sign the token
      return token;
    } catch (error) {
      throw new Error('Error generating token: ' + error.message);
    }
};