class ColorModeToggle {
  constructor() {
    this.colorPicker = document.getElementById("colorPicker");
    this.colorPickerLabel = document.getElementById("colorPickerLabel");
    this.colorPickerLabel.addEventListener("click", () =>
      this.toggleColorPicker()
    );
    this.colorPicker.addEventListener("input", () =>
      this.toggleCustomColorMode()
    );
    this.setInitialColorMode();
  }

  toggleColorPicker() {
    this.colorPicker.click();
  }

  toggleCustomColorMode() {
    const customColor = this.colorPicker.value;
    this.setBodyBackgroundColor(customColor);
    this.setHeaderBackgroundColor(customColor);
    this.setBodyTextColorBasedOnBackground(customColor);
    this.setLinkColorsBasedOnBackground();

    localStorage.setItem("customColorMode", customColor);
  }

  setBodyBackgroundColor(customColor) {
    const body = document.body;
    body.style.backgroundColor = customColor;
  }

  setHeaderBackgroundColor(customColor) {
    const header = document.getElementById("header");
    if (header) {
      header.style.backgroundColor = customColor;
    }
  }

  setBodyTextColorBasedOnBackground(customColor) {
    const body = document.body;
    const isDark = this.isColorDark(customColor);
    body.style.color = isDark ? "white" : "black";
  }

  setLinkColorsBasedOnBackground() {
    const links = document.getElementsByTagName("a");
    const isDark = this.isColorDark(this.colorPicker.value);

    for (const link of links) {
      link.style.color = isDark ? "white" : "black";
    }
  }

  isColorDark(hexColor) {
    const brightness = this.calculateBrightness(hexColor);
    return brightness < 128;
  }

  calculateBrightness(hexColor) {
    const hex = hexColor.replace(/^#/, "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return (r * 299 + g * 587 + b * 114) / 1000;
  }

  setInitialColorMode() {
    const savedCustomColor = localStorage.getItem("customColorMode");
    if (savedCustomColor) {
      this.colorPicker.value = savedCustomColor;
      this.toggleCustomColorMode();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const colorModeToggle = new ColorModeToggle();
});
