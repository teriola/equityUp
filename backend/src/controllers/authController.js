const router = require('express').Router();
const { Point } = require('@influxdata/influxdb-client');
const { writeAPI } = require('../config/influxdb');
const { validationResult } = require('express-validator');
const { isAuth } = require('../middlewares/authMiddleware');
const { validateLogin, validateRegister } = require('../utils/validations');
const { login, register } = require('../services/authService');
const { parseError } = require('../utils/parser');

// Login user
// POST /auth/login
// Public
router.post('/login',
    validateLogin(),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) throw errors;

            // Login user
            const { _id, accessToken } = await login({
                email: req.body.email,
                password: req.body.password,
            });

            res.status(200).json({
                _id,
                accessToken,
            });
        } catch (err) {
            console.log(err);
            res.status(400).json({
                message: 'Invalid user data',
                errors: parseError(err)
            });
        }
    });

// Register new user
// POST /auth/register
// Public
router.post('/register',
    validateRegister(),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) throw errors;

            // Register user
            const { _id, accessToken } = await register({
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
            });

            res.status(201).json({
                _id,
                accessToken,

            });
        } catch (err) {
            res.status(400).json({
                message: 'Invalid user data',
                errors: parseError(err)
            });
        }
    });

// Logout user
// GET /auth/logout
// Private
router.get('/logout',
    isAuth,
    (req, res) => {
        res.status(205).json({});
    });

module.exports = router;
