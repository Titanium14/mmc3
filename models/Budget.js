const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BudgetSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  budgetName: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
  },
  income: {
    type: Number,
    required: true
  },
  category: [
    {
      cateName: {
        type: String,
        required: true
      },
      incomeInput: {
        type: Number,
        required: true
      }
    }
  ]
});

module.exports = Budget = mongoose.model('budgets', BudgetSchema);
