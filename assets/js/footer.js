// footer 

document.addEventListener("DOMContentLoaded", function () {
    // Define the footer HTML content as a string
    const footerContent = `
        <p>&copy; 2024 John Doe |
        <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer">twitter</a> |
        <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    `;

    // Set the content of the footer element with the footer content
    document.getElementById("footer-placeholder").innerHTML = footerContent;
});
