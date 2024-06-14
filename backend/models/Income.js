const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Income', IncomeSchema);
