const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require('./routes/api/users');
const budgets = require('./routes/api/budgets');

const app = express();

// Body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use routes
app.use('/api/users', users);
app.use('/api/budgets', budgets);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
