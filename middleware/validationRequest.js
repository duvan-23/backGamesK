import { body, validationResult } from 'express-validator';

// Middleware to validate the login request body
export const validateLogin = [
  body('username').exists().withMessage('username is required'),
  body('password').exists().withMessage('password is required'),
  body('password').isLength({ min: 4 }).withMessage('Password must be at least 4 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //Send errors in the request body 
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
// Middleware to validate the slot-machine/calculate request body
export const validateCalculate = [
  body('result').exists().withMessage('result is required'),
  body('result').isArray().withMessage('result must be an array'),
  body('coins').exists().withMessage('coins is required'),
  body('coins').isNumeric().withMessage('coins must be a number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //Send errors in the request body 
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];