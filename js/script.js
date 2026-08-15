document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
        console.error("Theme toggle button not found!");
        return;
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
        themeToggle.textContent = "🌙";
    } else {
        document.body.classList.remove("light");
        themeToggle.textContent = "☀️";
    }


    // Toggle theme
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");

        if (isLight) {
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "light");
        } else {
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        }

    });

});

// ================================
// WORKS DROPDOWN
// ================================

const dropdown = document.querySelector(".nav-dropdown");
const dropdownTrigger = document.querySelector(".dropdown-trigger");

if (dropdown && dropdownTrigger) {

    dropdownTrigger.addEventListener("click", (event) => {

        event.stopPropagation();

        dropdown.classList.toggle("open");

    });


    // Close when clicking outside

    document.addEventListener("click", (event) => {

        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("open");
        }

    });

}

console.log("Seto's website loaded.");