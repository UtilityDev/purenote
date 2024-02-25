const themeBtn = document.querySelector('.theme-btn');
const themeContainer = document.querySelector('.theme-container');

const initThemeSelect = () => {
    themeContainer.style.display = 'flex';
}

const setTheme = (theme) => {
    document.body.className = `theme-${theme}`;
    themeContainer.style.display = 'none';
};