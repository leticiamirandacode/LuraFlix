window.toggleTheme = function() {
    const body = document.body;
    const text = document.getElementById('theme-text');

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        text.textContent = 'Tema claro';
    } else {
        localStorage.setItem('theme', 'dark');
        text.textContent = 'Tema escuro';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem('theme');
    const text = document.getElementById('theme-text');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        text.textContent = 'Tema claro';
    } else {
        text.textContent = 'Tema escuro';
    }
});