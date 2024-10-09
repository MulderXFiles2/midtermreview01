/*
Exercise: Implement a PUT Endpoint to Update a Programming Language

Instructions:
Step 1: Import Express
        - Import Express into your project.

Step 2: Initialize the Express application
        - Initialize the Express app.

Step 3: Define an initial array of favorite programming languages
        - Use the following array to simulate your data:
          const favoriteLanguages = ['JavaScript', 'Python', 'C#', 'Go', 'Ruby'];

Step 4: Define a PUT route /api/languages/:id
        - This route should update the language at the given ID with the value from the request body.
        - Handle the case when the provided ID does not exist and return an appropriate response.

Step 5: Start the server on port 8080
        - Start the server and listen on port 8080.

Example usage:
- Use Postman or a similar tool to send a PUT request to update a language.
- Example PUT request:
  URL: http://localhost:8080/api/languages/2
  Body: { "languageName": "TypeScript" }
- Expected Output: It should update the item with ID 2 to "TypeScript", if it exists.
*/

// Step 1: Import Express
const express = require('express');

// Step 2: Initialize the Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Step 3: Define an initial array of favorite programming languages
const favoriteLanguages = ['JavaScript', 'Python', 'C#', 'Go', 'Ruby'];

// Step 4: Define a PUT route /api/languages/:id
// This route will handle updating a specific programming language by ID
app.put('/api/languages/:id', (req, res) => {
    // Parse the ID from the request parameters and convert it to an integer
    const id = parseInt(req.params.id);

    // Extract the new language name from the request body
    const { languageName } = req.body;

    // Check if the ID is within the valid range of the array
    if (id < 0 || id >= favoriteLanguages.length) {
        // If the ID is invalid, return a 404 status with an error message
        return res.status(404).json({ error: "Invalid ID" });
    }

    // Update the language at the given ID
    favoriteLanguages[id] = languageName;

    // Send a response indicating success, along with the updated language name
    res.json({ message: `Language updated successfully to ${languageName}`, languages: favoriteLanguages });
});

// Step 5: Start the server on port 8080
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

// Example usage:
// Use Postman or similar tool to send a PUT request to http://localhost:8080/api/languages/:id
// with a JSON body containing { "languageName": "<new name>" }
