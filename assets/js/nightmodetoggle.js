// night mode toggle button

document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle between dark and light mode
    function toggleTheme() {
        const body = document.body;
        body.classList.toggle("dark");

        // Update the button text based on the current theme
        const button = document.getElementById("theme-toggle-button");
        button.textContent = body.classList.contains("dark") ? "light" : "dark";

        // Save the current theme preference to localStorage
        const isDarkMode = body.classList.contains("dark");
        localStorage.setItem("darkMode", isDarkMode);
    }

    // Event listener for the theme toggle button
    document.getElementById("theme-toggle-button").addEventListener("click", toggleTheme);

    // Check the theme preference in localStorage and set it on page load
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    if (savedDarkMode) {
        toggleTheme(); // Apply the saved theme if dark mode was enabled
    }
});
