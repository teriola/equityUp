const { body } = require('express-validator');

// Auth controller
exports.validateLogin = () => [
    body('email').trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email is invalid')
        .normalizeEmail(),
    body('password').trim()
        .notEmpty().withMessage('Password is required')
];

exports.validateRegister = () => [
    body('email').trim()
        .notEmpty().withMessage('Email is required')
        .isLength({ max: 30 }).withMessage('Email is too long')
        .isEmail().withMessage('Email is invalid')
        .normalizeEmail(),
    body('password').trim()
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6, max: 18 }).withMessage('Password must be between 6 and 18 characters'),
    body('rePassword').trim()
        .custom((value, { req }) => value === req.body.password).withMessage('Passwords don\'t match'),
];