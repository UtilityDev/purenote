const themeBtn = document.querySelector('.theme-btn');
const themeContainer = document.querySelector('.theme-container');

const initThemeSelect = () => {
    if (themeContainer.style.display !== 'flex') {
        themeContainer.style.display = 'flex';
    }
    else themeContainer.style.display = 'none';
}

const setTheme = (theme) => {
    document.body.className = `theme-${theme}`;
    themeContainer.style.display = 'none';
};