// navigation menu

document.addEventListener("DOMContentLoaded", function () {
    // Define the navbar HTML content as a string
    const navbarContent = `
        <ul class="navbar">
            <li><a href="/">home</a></li>
            <li><a href="about">about</a></li>
            <li><a href="work">work</a></li>
            <li><a href="education">education</a></li>
            <li><a href="contact">contact</a></li>
            <button id="theme-toggle-button">dark</button>
        </ul>
    `;

    // Set the content of the placeholder with the navbar content
    document.getElementById("navbar-placeholder").innerHTML = navbarContent;

    // Trigger the event to apply the saved theme on page load
    document.getElementById("theme-toggle-button").click();
});
