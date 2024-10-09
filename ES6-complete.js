const favoriteLanguages = ['JavaScript', 'Python', 'C#', 'Go', 'Ruby'];

// Function to manipulate the array
const manipulateLanguages = (array, newLanguage, languageToFind) => {
    // Add a new language to the end of the array
    array.push(newLanguage);
    console.log(`After adding ${newLanguage}:`, array);

    // Remove the first language from the array
    const [removedLanguage, ...rest] = array; // Using destructuring to get the first element
    array.shift(); // Actually removing the first element 
    console.log(`After removing ${removedLanguage}:`, array);

    // Find a specific language by name
    const index = array.indexOf(languageToFind);
    console.log(
        index !== -1
            ? `Language "${languageToFind}" found at index ${index}`
            : `Language "${languageToFind}" not found`
    );
};

// Example usage:
manipulateLanguages(favoriteLanguages, 'TypeScript', 'Go');

// Output:
// After adding TypeScript: ['JavaScript', 'Python', 'C#', 'Go', 'Ruby', 'TypeScript']
// After removing JavaScript: ['Python', 'C#', 'Go', 'Ruby', 'TypeScript']
// Language "Go" found at index 2
