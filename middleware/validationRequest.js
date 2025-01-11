import { body, validationResult } from 'express-validator';

// Middleware to validate request body
export const validateLogin = [
  body('username').exists().withMessage('username is required'),
  body('password').exists().withMessage('password is required'),
  body('password').isLength({ min: 4 }).withMessage('Password must be at least 4 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];