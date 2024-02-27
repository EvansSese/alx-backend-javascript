const express = require('express');

const app = express();

// Define a route handler for the root path '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Set the server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the Express app instance
module.exports = app;
