// Define the html template tag
function html(strings, ...values) {
  let result = strings[0];
  for (let i = 0; i < values.length; i++) {
    result += values[i] + strings[i + 1];
  }
  return result;
}

document.addEventListener("DOMContentLoaded", function () {
  // Define the footer HTML content as a string
  const footerContent = html`
    <p>
      &copy; 2024 John Doe |
      <a
        href="https://twitter.com/yourtwitterhandle"
        target="_blank"
        rel="noopener noreferrer"
        >twitter</a
      >
      |
      <a
        href="https://www.linkedin.com/in/yourlinkedinprofile"
        target="_blank"
        rel="noopener noreferrer"
        >LinkedIn</a
      >
    </p>
  `;

  // Set the content of the footer element with the footer content
  document.getElementById("footer-placeholder").innerHTML = footerContent;
});
