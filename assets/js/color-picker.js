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
    
        // Determine if the background color is dark
        const isDark = this.isColorDark(customColor);
    
        // Set text color based on background darkness
        body.style.color = isDark ? 'white' : 'black';
    
        // Change color of links
        const links = document.getElementsByTagName('a');
        for (const link of links) {
            link.style.color = isDark ? 'white' : 'black';
        }
    
        localStorage.setItem('customColorMode', customColor);
    }

    isColorDark(hexColor) {
        // Function to determine if a color is dark based on its hex value
        const hex = hexColor.replace(/^#/, '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        // Formula to calculate brightness (perceived luminance)
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        // You can adjust the threshold (e.g., 128) based on your preference
        return brightness < 128;
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
