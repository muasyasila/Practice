// app.js

// Import the Express framework
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
