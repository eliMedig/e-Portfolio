// Toggle dark mode and save preference
    document.getElementById('darkModeToggle').addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode); // Save preference
  });
  
  // Apply saved preference on page load
  window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  });
  