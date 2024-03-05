const { isAuth } = require('../middlewares/authMiddleware');
const { createTransaction } = require('../services/transactionsService');
const { parseError } = require('../utils/parser');

const router = require('express').Router();

// Create new transaction
// POST /transactions/create
// Private
router.post('/create',
    // isAuth,
    // validateTransaction(),
    async (req, res) => {
        try {
            const data = await createTransaction(req.body);

            res.status(201).json({
                // data
            });
        } catch (err) {
            res.status(400).json({
                message: 'Invalid transaction data',
                errors: parseError(err)
            });
        }
    });

module.exports = router;