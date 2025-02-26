// Adds svgs in html
function svgFileFetch() {
   fetch("style/SVGS/icons.svg")
   .then(response => response.text()) // Convert response to text
   .then(svgData => {
      document.body.insertAdjacentHTML("afterbegin", svgData); // Insert into page
   })
   .catch(error => console.error("Error loading SVG:", error)); // Handle errors
}

svgFileFetch(); // Call the function
