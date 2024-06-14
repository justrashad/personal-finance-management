const mongoose = require('mongoose');
const User = require('./models/User');
const Expense = require('./models/Expense');
const Income = require('./models/Income');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('Connected to MongoDB');

  // Clear existing data
  await User.deleteMany({});
  await Expense.deleteMany({});
  await Income.deleteMany({});

  // Seed users
  const users = [
    { username: 'user1', email: 'user1@example.com', password: 'password123' },
    { username: 'user2', email: 'user2@example.com', password: 'password123' },
  ];

  for (const userData of users) {
    const user = new User(userData);
    await user.save();
  }

  // Get user ids
  const user1 = await User.findOne({ email: 'user1@example.com' });
  const user2 = await User.findOne({ email: 'user2@example.com' });

  // Seed expenses
  const expenses = [
    { userId: user1._id, amount: 50, category: 'Food', description: 'Groceries' },
    { userId: user1._id, amount: 100, category: 'Transport', description: 'Gas' },
    { userId: user2._id, amount: 30, category: 'Entertainment', description: 'Movies' },
  ];

  for (const expenseData of expenses) {
    const expense = new Expense(expenseData);
    await expense.save();
  }

  // Seed incomes
  const incomes = [
    { userId: user1._id, amount: 2000, category: 'Salary', description: 'Monthly salary' },
    { userId: user2._id, amount: 1500, category: 'Freelance', description: 'Freelance project' },
  ];

  for (const incomeData of incomes) {
    const income = new Income(incomeData);
    await income.save();
  }

  console.log('Database seeded successfully');
  mongoose.connection.close();
}).catch(err => {
  console.log('Failed to connect to MongoDB', err);
});
