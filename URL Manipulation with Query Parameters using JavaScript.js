// Create a new URL object based on the current page's URL
const url = new URL(window.location);

// Set a value for the query parameter "paramName" to "paramValue"
url.searchParams.set('paramName', 'paramValue');

// Get the complete URL with the new parameters
const newUrl = url.href;

// Use history.pushState to update the page's address without reloading
history.pushState({}, '', newUrl);
