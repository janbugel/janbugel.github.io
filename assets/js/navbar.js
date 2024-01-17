// navbar.js

// for github.io
document.addEventListener("DOMContentLoaded", function () {
    // Define the navbar HTML content as a string
    const navbarContent = `
        <ul class="navbar">
            <li><a href="./">home</a></li>
            <li><a href="./about">about</a></li>
            <li><a href="./projects">projects</a></li>
            <li><a href="./contact">contact</a></li>
            <li><a href="./education">education</a></li>
        </ul>
    `;

    // Set the content of the placeholder with the navbar content
    document.getElementById("navbar-placeholder").innerHTML = navbarContent;
});

// for localhost

/*
// navbar.js

document.addEventListener("DOMContentLoaded", function () {
    // Define the navbar HTML content as a string
    const navbarContent = `
        <ul class="navbar">
            <li><a href="./">home</a></li>
            <li><a href="./about.html">about</a></li>
            <li><a href="./projects.html">projects</a></li>
            <li><a href="./contact.html">contact</a></li>
            <li><a href="./education.html">education</a></li>
        </ul>
    `;

    // Set the content of the placeholder with the navbar content
    document.getElementById("navbar-placeholder").innerHTML = navbarContent;
});
*/