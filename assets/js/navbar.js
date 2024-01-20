// navigation menu

document.addEventListener("DOMContentLoaded", function () {
    const navbarContent = `
        <ul class="navbar">
            <li><a href="/">home</a></li>
            <li><a href="work">work</a></li>
            <li><a href="education">education</a></li>
            <li><a href="contact">contact</a></li>
    `;

    document.getElementById("navbar-placeholder").innerHTML = navbarContent;
    document.getElementById("theme-toggle-button").click();
});
