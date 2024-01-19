document.addEventListener("DOMContentLoaded", function () {

    const navbarContent = `
        <ul class="navbar">
            <li><a href="/">home</a></li>
            <li><a href="work">work</a></li>
            <li><a href="education">education</a></li>
            <li><a href="contact">contact</a></li>
            <li><a href="javascript:void(0);" id="colorPickerLabel" class="color-picker-label" onclick="openColorPicker()">
             <label for="colorPicker">themes</label>
        </a></li>
        <input type="color" id="colorPicker" style="display: none;">
    `;

    document.getElementById("navbar-placeholder").innerHTML = navbarContent;

    // color picker

    class ColorPickerApp {
        constructor(colorPickerId) {
            this.colorPicker = document.getElementById(colorPickerId);
            this.loadColor();
            this.addEventListeners();
        }
    
        loadColor() {
            const savedColor = localStorage.getItem("selectedColor");
            if (savedColor) {
                this.updateBackgroundColor(savedColor);
                this.colorPicker.value = savedColor;
            }
        }
    
        addEventListeners() {
            this.colorPicker.addEventListener("input", () => {
                const selectedColor = this.colorPicker.value;
                this.updateBackgroundColor(selectedColor);
                localStorage.setItem("selectedColor", selectedColor);
            });
        }
    
        updateBackgroundColor(color) {
            document.body.style.backgroundColor = color;
            const darkerColor = this.calculateDarkerColor(color);
    
            // Update header background color
            const header = document.querySelector('header');
            if (header) {
                header.style.backgroundColor = darkerColor;
            }
    
            // Update navbar background color
            const nav = document.querySelector('nav');
            if (nav) {
                nav.style.backgroundColor = darkerColor;
            }
    
            const brightness = this.calculateBrightness(color);
            const textColor = (brightness < 128) ? "#ffffff" : "#000000";
            document.body.style.color = textColor;
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.style.color = textColor;
            });
        }
    
        calculateDarkerColor(hexColor) {
            const rgb = this.hexToRgb(hexColor);
            const darkerRgb = {
                r: Math.max(0, rgb.r - 20),
                g: Math.max(0, rgb.g - 20),
                b: Math.max(0, rgb.b - 20)
            };
            return this.rgbToHex(darkerRgb);
        }
    
        calculateBrightness(hexColor) {
            const rgb = this.hexToRgb(hexColor);
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        }
    
        hexToRgb(hex) {
            hex = hex.replace(/^#/, '');
            const bigint = parseInt(hex, 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            return { r, g, b };
        }
    
        rgbToHex(rgb) {
            return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
        }
    }
    function initializeApp() {
        const colorPickerApp = new ColorPickerApp("colorPicker");
    }
    initializeApp();
});


