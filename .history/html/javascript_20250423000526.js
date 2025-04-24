console.log("Hello World");
// This is a simple JavaScript code snippet that logs a message to the console`
const url = "https://example.com";
console.log("The URL is:", url);
// This code snippet demonstrates how to use the fetch API to make a GET request to a URL
fetch(url)
  .then((response) => response.text())
  .then((data) => console.log("The response data is:", data))
  .catch((error) => console.error("An error occurred:", error));