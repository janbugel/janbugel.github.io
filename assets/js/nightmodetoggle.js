document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle between dark and light mode
    function toggleTheme() {
        document.body.classList.toggle("dark");
        
        // Save the current theme preference to localStorage
        const isDarkMode = document.body.classList.contains("dark");
        localStorage.setItem("darkMode", isDarkMode);
    }

    // Event listener for the theme toggle button
    document.getElementById("theme-toggle-button").addEventListener("click", toggleTheme);

    // Check the theme preference in localStorage and set it on page load
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    if (savedDarkMode) {
        document.body.classList.add("dark");
    }
});
