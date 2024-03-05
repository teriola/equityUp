const router = require('express').Router();

const authController = require('./controllers/authController');
const transactionsController = require('./controllers/transactionsController');

router.use('/auth', authController);
router.use('/transactions', transactionsController)

module.exports = router;