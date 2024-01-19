document.addEventListener("DOMContentLoaded", function () {

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

    document.getElementById("navbar-placeholder").innerHTML = navbarContent;

    const currentTheme = localStorage.getItem('selectedTheme') || 'default';
    const themeSwitcherScript = document.createElement('script');
    themeSwitcherScript.src = '/assets/js/theme-switcher.js'; // Adjust the path based on your structure
    document.head.appendChild(themeSwitcherScript);

    themeSwitcherScript.onload = function () {
        switchTheme(currentTheme, themes[currentTheme]);
    };
});
