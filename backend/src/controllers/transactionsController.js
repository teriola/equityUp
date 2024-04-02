const { isAuth } = require('../middlewares/authMiddleware');
const { createTransaction, getTransactions } = require('../services/transactionsService');
const { parseError } = require('../utils/parser');
const { validateTransaction } = require('../utils/validations');

const router = require('express').Router();

// Create new transaction
// POST /transactions/create
// Private
router.post('/create',
  isAuth,
  validateTransaction(),
  async (req, res) => {
    try {
      const transaction = await createTransaction(req.body);
      console.log(transaction);

      res.status(201).json({
        transaction,
      });
    } catch (err) {
      res.status(400).json({
        message: 'Invalid transaction data',
        errors: parseError(err)
      });
    }
  });

// Get all transactions
// GET /transactions
// Private
router.get('/',
  isAuth,
  async (req, res) => {
    try {
      const transactions = await getTransactions();
      console.log(transactions);

      res.status(201).json({
        transactions,
      });
    } catch (err) {
      res.status(400).json({
        message: 'Invalid transaction data',
        errors: parseError(err)
      });
    }
  });

module.exports = router;
