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


function getTranslation(object, path) {

    return path
        .split(".")
        .reduce((current, key) => current?.[key], object);

}


function setLanguage(language) {

    const elements =
        document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {

        const key = element.dataset.i18n;

        const translation =
            getTranslation(translations[language], key);

        if (translation) {
            element.textContent = translation;
        }

    });


    document.documentElement.lang = language;

    localStorage.setItem("language", language);

    languageToggle.textContent =
        language === "th" ? "TH" : language === "jp" ? "JP" : "EN";
}

const languageToggle =
    document.getElementById("language-toggle");

const savedLanguage =
    localStorage.getItem("language") || "en";

setLanguage(savedLanguage);

const languageMenu =
    document.getElementById("language-menu");


languageToggle.addEventListener("click", (event) => {

    event.stopPropagation();

    languageMenu.classList.toggle("open");

});


languageMenu.querySelectorAll("[data-language]")
    .forEach(button => {

        button.addEventListener("click", () => {

            const language =
                button.dataset.language;

            setLanguage(language);

            languageMenu.classList.remove("open");

        });

    });


document.addEventListener("click", () => {

    languageMenu.classList.remove("open");

});

console.log("Seto's website loaded.");