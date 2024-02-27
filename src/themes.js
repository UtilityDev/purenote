const themeBtn = document.querySelector('.theme-btn');
const themeContainer = document.querySelector('.theme-container');

// Load theme from localStorage (if valid)
if (localStorage.getItem("theme") !== null) {
    document.body.className = localStorage.getItem("theme");
}

// Init theme select container
const initThemeSelect = () => {
    if (themeContainer.style.display !== 'flex') {
        themeContainer.style.display = 'flex';
    }
    else themeContainer.style.display = 'none';
}

// Set given theme
const setTheme = (theme) => {
    document.body.className = `theme-${theme}`;
    themeContainer.style.display = 'none';

    // Save theme to localStorage
    localStorage.setItem("theme", document.body.className);
};