const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const serverless = require('serverless-http');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to QR Scanner Backend API djhdjs' });
});

app.get('/bins', (req, res) => {
  try {
    res.json({ message: 'BIN80046001' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Export serverless handler
module.exports = serverless(app);
