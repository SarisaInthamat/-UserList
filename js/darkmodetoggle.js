const setTheme = theme => {
    document.documentElement.setAttribute('data-bs-theme', theme);
}

document.querySelectorAll('[data-bs-theme-value]').forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-bs-theme-value');
        setTheme(theme);
    });
});