document.addEventListener("DOMContentLoaded", function () {
    // Define the navbar HTML content as a string
    const navbarContent = `
        <ul class="navbar">
            <li><a href="/">home</a></li>
            <li><a href="work">work</a></li>
            <li><a href="education">education</a></li>
            <li><a href="contact">contact</a></li>
            <ul class="navbar">
            <div class="dropdown">
                <button class="dropbtn">Color Mode</button>
                <div class="dropdown-content" id="colorModeDropdown"></div>
            </div>
        </ul>
        </ul>
    `;

    // Set the content of the placeholder with the navbar content
    document.getElementById("navbar-placeholder").innerHTML = navbarContent;

    // Apply the saved theme on page load
    const currentTheme = localStorage.getItem('selectedTheme') || 'default';
    const themeSwitcherScript = document.createElement('script');
    themeSwitcherScript.src = '/assets/js/theme-switcher.js'; // Adjust the path based on your structure
    document.head.appendChild(themeSwitcherScript);

    themeSwitcherScript.onload = function () {
        // Apply the current theme when the theme-switcher.js script is loaded
        switchTheme(currentTheme, themes[currentTheme]);
    };
});
