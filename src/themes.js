const themeBtn = document.querySelector('.theme-btn');
const themeContainer = document.querySelector('.theme-container');

if (localStorage.getItem("theme") !== undefined) {
    document.body.className = localStorage.getItem("theme");
}

const initThemeSelect = () => {
    if (themeContainer.style.display !== 'flex') {
        themeContainer.style.display = 'flex';
    }
    else themeContainer.style.display = 'none';
}

const setTheme = (theme) => {
    document.body.className = `theme-${theme}`;
    themeContainer.style.display = 'none';

    // Save theme to localStorage
    localStorage.setItem("theme", document.body.className);
};