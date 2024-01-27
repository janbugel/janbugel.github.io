// Define the html template tag
function html(strings, ...values) {
  let result = strings[0];
  for (let i = 0; i < values.length; i++) {
    result += values[i] + strings[i + 1];
  }
  return result;
}

// navigation menu
document.addEventListener("DOMContentLoaded", function () {
  const navbarContent = html`
    <ul class="navbar">
      <li><a href="/">home</a></li>
      <!--
      <li><a href="work">work</a></li>
      -->
      <li><a href="education">education</a></li>
      <li><a href="contact">contact</a></li>
      <li>
        <a
          href="javascript:void(0);"
          id="colorPickerLabel"
          class="color-picker-label"
          onclick="openColorPicker()"
        >
          <label id="colorPickerLabel" for="colorPicker">themes</label>
        </a>
      </li>
      <input type="color" id="colorPicker" style="transform: scale(0%)">
      <!--
      https://act-rules.github.io/pages/examples/visible/
      -->
    </ul>
  `;

  document.getElementById("navbar-placeholder").innerHTML = navbarContent;
  document.getElementById("theme-toggle-button").click();
});
