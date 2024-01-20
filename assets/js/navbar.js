// navigation menu

document.addEventListener("DOMContentLoaded", function () {
    const navbarContent = `
        <ul class="navbar">
            <li><a href="/">home</a></li>
            <li><a href="work">work</a></li>
            <li><a href="education">education</a></li>
            <li><a href="contact">contact</a></li>
            <li>
            <a href="javascript:void(0);" id="colorPickerLabel" class="color-picker-label" onclick="openColorPicker()">
                <label id="colorPickerLabel" for="colorPicker">themes</label>
            </a>
            </li>
            <input type="color" id="colorPicker" style="display: none;">
        </ul>
    `;

    document.getElementById("navbar-placeholder").innerHTML = navbarContent;
    document.getElementById("theme-toggle-button").click();
});
