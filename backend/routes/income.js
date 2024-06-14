const express = require('express');
const { addIncome, getIncomes, updateIncome, deleteIncome } = require('../controllers/incomeController');
const router = express.Router();

router.post('/', addIncome);
router.get('/', getIncomes);
router.put('/:id', updateIncome);
router.delete('/:id', deleteIncome);

module.exports = router;
