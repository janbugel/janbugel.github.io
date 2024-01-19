
class ColorModeToggle {
    constructor() {
        this.colorModes = ['Dark', 'Light', 'Orange', 'Blue', 'Green', 'Purple', 'Pink', 'Red', 'Yellow', 'Teal', 'Brown'];
        this.initializeDropdown();
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

    initializeDropdown() {
        const dropdownContainer = document.getElementById('colorModeDropdown');
        this.colorModes.forEach(mode => {
            const option = document.createElement('a');
            option.href = '#';
            option.textContent = mode;
            option.addEventListener('click', () => {
                this.toggleColorMode(mode);
                dropdownContainer.classList.remove('show'); 
            });
            dropdownContainer.appendChild(option);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const colorModeToggle = new ColorModeToggle();
});
