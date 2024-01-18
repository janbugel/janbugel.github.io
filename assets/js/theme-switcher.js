// theme-switcher.js

// Function to switch the theme globally
function switchTheme(themeName, theme) {
  // Add a class to the body to apply default styles immediately
  document.body.classList.add('theme-transition');
  
  document.body.style.background = theme.background;
  document.body.style.color = theme.color;

  // Save the selected theme to local storage
  localStorage.setItem('selectedTheme', themeName);

  console.log(`Switched to ${themeName} theme`);

  // Use a setTimeout to delay removing the transition class
  setTimeout(() => {
    document.body.classList.remove('theme-transition');
  }, 1000); // Adjust the delay based on your transition duration

  // Remove the existing theme stylesheet, if any
  const existingThemeStylesheet = document.getElementById('theme-stylesheet');
  if (existingThemeStylesheet) {
    existingThemeStylesheet.remove();
  }

  // Create a new link element for the theme stylesheet
  const newThemeStylesheet = document.createElement('link');
  newThemeStylesheet.rel = 'stylesheet';
  newThemeStylesheet.href = `/assets/css/${themeName}.css`; // Adjust the path based on your structure
  newThemeStylesheet.id = 'theme-stylesheet';

  // Append the new theme stylesheet to the document head
  document.head.appendChild(newThemeStylesheet);
}

// Fetch the theme-list.json
fetch('/themes/theme-list.json') // Adjust the path based on your structure
  .then(response => response.json())
  .then(themes => {
    // Apply the current theme when the page loads
    const currentTheme = localStorage.getItem('selectedTheme') || 'default';
    switchTheme(currentTheme, themes[currentTheme]);
  });
