/* listens to event on the color picker label
(reason is there is bug on webkit browsers that it 
doesn't trigger the input event on the color picker */

class ColorModeToggle {
    constructor() {
        this.colorPicker = document.getElementById('colorPicker');
        this.colorPickerLabel = document.getElementById('colorPickerLabel');
        this.colorPickerLabel.addEventListener('click', () => this.toggleColorPicker());
        this.colorPicker.addEventListener('input', () => this.toggleCustomColorMode());
        this.setInitialColorMode();
    }

    toggleColorPicker() {
        this.colorPicker.click();
    }

    toggleCustomColorMode() {
        const body = document.body;
        const customColor = this.colorPicker.value;

        body.style.backgroundColor = customColor;
e
        localStorage.setItem('customColorMode', customColor);
    }

    setInitialColorMode() {
        const savedCustomColor = localStorage.getItem('customColorMode');
        if (savedCustomColor) {
            this.colorPicker.value = savedCustomColor;
            this.toggleCustomColorMode();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const colorModeToggle = new ColorModeToggle();
});
