/*
Exercise: Set up a Simple Express Server with a /hello Endpoint

Instructions:
Step 1: Initialize the project
        - Run the following command in your terminal to create a new Node.js project:
          npm init -y

Step 2: Install Express
        - Install Express as a dependency:
          npm install express

Step 3: Import Express
        - Import Express into your project.

Step 4: Initialize the Express application
        - Initialize the express app.

Step 5: Define a GET route for /hello that returns { message: "Hello, World!" }
        - Define the /hello route that responds with the required JSON object.

Step 6: Start the server on port 3000
        - Start the server and listen on port 3000.

Example usage:
- After completing the above steps, run the server using:
  node <filename>.js
- Then, access http://localhost:3000/hello in your browser.
- Expected output: { "message": "Hello, World!" }
*/

// Step 3: Import Express
const express = require('express');

// Step 4: Initialize the Express application
const app = express();

// Step 5: Define a GET route for /hello that returns { message: "Hello, World!" }
app.get('/hello', (req, res) => {
    res.json({ message: "Hello, World!" });
});

// Step 6: Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

