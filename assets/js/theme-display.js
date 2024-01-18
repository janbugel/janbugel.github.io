// themes-display.js

// Function to display themes on themes.html
function displayThemes(themes) {
    const themeList = document.getElementById('themeList');
    const currentTheme = localStorage.getItem('selectedTheme') || 'default';
  
    // Loop through the themes and create theme items
    Object.keys(themes).forEach(themeName => {
      const themeItem = document.createElement('div');
      themeItem.classList.add('theme-item');
      themeItem.style.background = themes[themeName].background;
      themeItem.style.color = themes[themeName].color;
      themeItem.innerHTML = themeName;
  
      // Highlight the currently selected theme
      if (themeName === currentTheme) {
        themeItem.style.border = '2px solid #000'; // You can change the border style for highlighting
      }
  
      // Add click event to switch theme
      themeItem.addEventListener('click', () => switchTheme(themeName, themes[themeName]));
  
      themeList.appendChild(themeItem);
    });
  }
  
  // Fetch the theme-list.json for themes.html
  fetch('/themes/theme-list.json') // Adjust the path based on your structure
    .then(response => response.json())
    .then(themes => {
      // Display the themes on the themes.html page
      const themeList = document.getElementById('themeList');
      if (themeList) {
        displayThemes(themes);
      }
    });
  