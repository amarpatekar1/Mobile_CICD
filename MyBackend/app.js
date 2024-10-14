const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Simple test API endpoint
app.get('/', (req, res) => {
  res.send('Hello, World! This is your backend server.');
});

// Another API route for testing
app.get('/api', (req, res) => {
  res.json({ message: 'API is working correctly!' });
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

