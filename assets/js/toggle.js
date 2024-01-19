class ColorModeToggle {
    constructor() {
        this.colorModes = ['Dark', 'Orange', 'Blue', 'Green', 'Purple', 'Pink', 'Red', 'Yellow', 'Teal', 'Brown'];
        this.initializeButtons();
        this.setInitialColorMode();
    }

    toggleColorMode(mode) {
        const body = document.body;
        this.colorModes.forEach(m => body.classList.remove(`${m.toLowerCase()}-mode`));
        body.classList.toggle(`${mode.toLowerCase()}-mode`);
        const isMode = body.classList.contains(`${mode.toLowerCase()}-mode`);
        localStorage.setItem('currentMode', isMode ? mode : '');
    }

    setInitialColorMode() {
        const savedMode = localStorage.getItem('currentMode');
        if (savedMode) {
            this.toggleColorMode(savedMode);
        }
    }

    initializeButtons() {
        const buttons = document.querySelectorAll('.theme-button');
        buttons.forEach(button => {
            const theme = button.getAttribute('data-theme');
            button.addEventListener('click', () => {
                this.toggleColorMode(theme);
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const colorModeToggle = new ColorModeToggle();
});
