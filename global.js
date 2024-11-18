
// Changing the heading text using js
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    heading.textContent = "Welcome to my Portfolio!";
});

// Add a message to the footer
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    const message = document.createElement("p");
    message.textContent = "Thank you for visiting my portfolio!";
    footer.appendChild(message);
});

// Add current year to the footer beside the copyright message
document.addEventListener("DOMContentLoaded", () => {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Find the #currentYear element in the footer and update its text content
    document.getElementById("currentYear").textContent = currentYear;
});

