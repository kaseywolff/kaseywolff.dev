// Import necessary modules
const express = require('express');
const path = require('path');

// Create an Express app
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Define API routes or other server routes here

// Catch-all route for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
