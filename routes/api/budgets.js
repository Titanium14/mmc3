const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load validation
const validateBudgetInput = require('../../validation/budgets');
const validateCategoryInput = require('../../validation/category');

// Load User model
const Budget = require('../../models/Budget');

// Load User model
const User = require('../../models/User');

// @route   GET api/budgets/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Budget works' }));

// @route   GET api/budgets
// @desc    Get current user's budget
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};
    Budget.find({ user: req.user.id })
      .then(budgets => {
        if (!budgets) {
          errors.nobudgets = 'There is no budgets for this user';
          return res.status(404).json(errors);
        }
        res.json(budgets);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   GET api/profile/all
// @desc    Get all profile
// @access  Public
router.get('/all', (req, res) => {
  const errors = {};

  Budget.find()
    .populate('user', ['name', 'avatar'])
    .then(budgets => {
      if (!budgets) {
        errors.nobudgets = 'There are no budgets';
        return res.status(404).json(errors);
      }

      res.json(budgets);
    })
    .catch(err => res.status(404).json({ budgets: 'There are no budgets' }));
});

// @route   POST api/budgets
// @desc    Create or edit budgets
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateBudgetInput(req.body);

    // Check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const budgetFields = {};
    budgetFields.user = req.user.id;
    if (req.body.name) budgetFields.name = req.body.name;
    if (req.body.period) budgetFields.period = req.body.period;
    if (req.body.incomeTotal) budgetFields.incomeTotal = req.body.incomeTotal;

    Budget.findOne({ name: budgetFields.name }).then(budget => {
      if (budget && budget.name !== req.body.name) {
        // Update
        Budget.findOneAndUpdate(
          { user: req.user.id },
          { $set: budgetFields },
          { new: true }
        ).then(budget => res.json(budget));
      } else {
        // Create

        // Check if budget exists
        Budget.findOne({ name: budgetFields.name }).then(budget => {
          if (budget) {
            errors.name = 'That budget already exists';
            res.status(400).json(errors);
          } else {
            // Save budget
            new Budget(budgetFields).save().then(budget => res.json(budget));
          }
        });
      }
    });
  }
);

// @route   POST api/budget/category
// @desc    Add category to budget
// @access  Private
router.post(
  '/category',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCategoryInput(req.body);

    // Check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Budget.findOne({ user: req.user.id }).then(budget => {
      const newCate = {
        name: req.body.name,
        income: req.body.income
      };

      // Add to cate array
      budget.category.unshift(newCate);

      budget.save().then(budget => res.json(budget));
    });
  }
);

// @route   DELETE api/budget/category/:cate_id
// @desc    Delete category from budget
// @access  Private
router.delete(
  '/category/:cate_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Budget.findOne({ user: req.user.id })
      .then(budget => {
        const errors = {};

        // Get remove index
        const removeIndex = budget.category
          .map(item => item.id)
          .indexOf(req.params.cate_id);

        // Check if the category exists
        if (removeIndex === -1) {
          errors.nocatetodelete = 'There is no category to delete';
          res.status(404).json(errors);
        } else {
          // Splice out of array
          budget.category.splice(removeIndex, 1);

          // Save
          budget.save().then(budget => res.json(budget));
        }
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   DELETE api/budget/:id
// @desc    Delete budget
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Budget.findOneAndRemove({ user: req.user.id }).then(() => {
      res.json({ success: true });
    });
  }
);

module.exports = router;
