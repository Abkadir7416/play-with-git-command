const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express server!' });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 