const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  try {
    const { userId, amount, category, description } = req.body;
    const expense = new Expense({ userId, amount, category, description });
    await expense.save();
    res.status(201).json({ message: 'Expense added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const { userId } = req.query;
    const expenses = await Expense.find({ userId });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, category, description } = req.body;
    const expense = await Expense.findByIdAndUpdate(id, { amount, category, description }, { new: true });
    res.status(200).json({ message: 'Expense updated successfully', expense });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
