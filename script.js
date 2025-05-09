// Function to save user preference (theme) in local storage
function savePreference(theme) {
    localStorage.setItem("theme", theme);
    applyTheme(theme);
}

// Function to retrieve user preference and apply the theme on page load
function loadPreference() {
    const theme = localStorage.getItem("theme");
    if (theme) {
        applyTheme(theme);
    }
}

// Apply the selected theme
function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

// Animate image on click
document.querySelector("#animatedImage").addEventListener("click", function () {
    this.classList.toggle("fade"); // Toggle fade animation
});

// Toggle theme using localStorage
document.querySelector("#darkModeBtn").addEventListener("click", function () {
    const newTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
    savePreference(newTheme);
});

// Load preferences when the page is opened
window.onload = loadPreference;
