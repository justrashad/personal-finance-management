const Income = require('../models/Income');

exports.addIncome = async (req, res) => {
  try {
    const { userId, amount, category, description } = req.body;
    const income = new Income({ userId, amount, category, description });
    await income.save();
    res.status(201).json({ message: 'Income added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getIncomes = async (req, res) => {
  try {
    const { userId } = req.query;
    const incomes = await Income.find({ userId });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, category, description } = req.body;
    const income = await Income.findByIdAndUpdate(id, { amount, category, description }, { new: true });
    res.status(200).json({ message: 'Income updated successfully', income });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteIncome = async (req, res) => {
  try {
    const { id } = req.params;
    await Income.findByIdAndDelete(id);
    res.status(200).json({ message: 'Income deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
