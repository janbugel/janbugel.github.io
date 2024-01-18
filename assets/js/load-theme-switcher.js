// load-theme-switcher.js

document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcherScript = document.createElement('script');
    themeSwitcherScript.src = '/assets/js/theme-switcher.js'; // Adjust the path based on your structure
    document.head.appendChild(themeSwitcherScript);
  
    // Apply the saved theme on page load
    themeSwitcherScript.onload = function () {
      const currentTheme = localStorage.getItem('selectedTheme') || 'default';
      switchTheme(currentTheme, themes[currentTheme]);
    };
  });
  