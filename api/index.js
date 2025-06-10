const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to QR Scanner Backend API djhdjs' });
});
app.get('/bins',(req,res)=>{
  
  res.json({message:"BIN80046001"})
})
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});    