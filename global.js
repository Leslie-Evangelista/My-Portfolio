
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

// Toggle dark mode/light mode
document.addEventListener("DOMContentLoaded", () => {
    const darkModeButton = document.getElementById("darkModeButton");

    // Check for saved user preference in localStorage
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        darkModeButton.textContent = "Light Mode";
    }

    // Toggle dark mode on button click
    darkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Save the user's preference to localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            darkModeButton.textContent = "Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            darkModeButton.textContent = "Dark Mode";
        }
    });
});

// Skillset list using an array
document.addEventListener("DOMContentLoaded", () => {
    // Arrays of skills
    const frontEndSkills = ["HTML5", "JavaScript", "CSS3", "Next.js"];
    const backEndSkills = ["Python", "C#", "MySQL", "Java"];
    const developerTools = [
        "GitHub",
        "Visual Studio Code",
        "Visual Studio 2022",
        "Figma",
        "Adobe Express",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Docker"
    ];

    // Function to generate a list dynamically
    function generateList(skillArray, elementId) {
        const listElement = document.getElementById(elementId);
        skillArray.forEach((skill) => {
            const listItem = document.createElement("li");
            listItem.textContent = skill;
            listElement.appendChild(listItem);
        });
    }

    // Generate lists for each category
    generateList(frontEndSkills, "frontEndSkills");
    generateList(backEndSkills, "backEndSkills");
    generateList(developerTools, "developerTools");

    // Add the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
});
