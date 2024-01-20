// navigation menu

document.addEventListener("DOMContentLoaded", function () {
    const navbarContent = `
        <ul class="navbar">
            <li><a href="/">home</a></li>
            <li><a href="work">work</a></li>
            <li><a href="education">education</a></li>
            <li><a href="contact">contact</a></li>

            <!--
            https://act-rules.github.io/pages/examples/visible/
            -->
            
            <!--
            <li>
                <a href="javascript:void(0);" class="color-picker-label" onclick="onClick()">
                <label id="colorPickerLabel" for="colorPicker">themes</label>
                <input type="color" id="colorPicker" style="transform: scale(0%)"></a>
            </li>
            -->
            
            <li><a href="javascript:void(0);" id="colorPickerLabel" class="color-picker-label" onclick="openColorPicker()">
            <label id="colorPickerLabel" for="colorPicker">themes</label>
            </a></li>
            <input type="color" id="colorPicker" style="transform: scale(0%)""> 
            
            <!--
            <li>
            <a href="javascript:void(0);" class="color-picker-label" onclick="onClick()"></a>
            </li>

            <label id="colorPickerLabel" for="colorPicker">themes</label>

            <br>

            <input type="color" id="colorPicker" >
            -->
            
            <!--
            <label 
                id="colorPickerLabel" for="colorPicker" tabindex="0">
                themes
                <input type="color" id="colorPicker" style="position: absolute; left: -9999px;">
            </label>
            -->
            
            <!--
            <li>
                <a href="javascript:void(0);" class="color-picker-label" onclick="onClick()">
                <label id="colorPickerLabel" for="colorPicker">themes</label>
                <input type="color" id="colorPicker" style="position: absolute; left: -9999px;">
            </a>
            </li>
            -->
        </ul>
    `;

    document.getElementById("navbar-placeholder").innerHTML = navbarContent;
    document.getElementById("theme-toggle-button").click();
});
