const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BudgetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  income: {
    type: Number,
    required: true
  }
});

module.exports = Budget = mongoose.model('budgets', BudgetSchema);
