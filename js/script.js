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

document.addEventListener("click", (event) => {

    const link =
        event.target.closest("a");


    if (!link) {
        return;
    }


    const href =
        link.getAttribute("href");


    // Ignore special links
    if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        link.target === "_blank"
    ) {
        return;
    }


    event.preventDefault();


    pageLoader.classList.remove("hidden");


    setTimeout(() => {

        window.location.href = href;

    }, 400);

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


const languageToggle =
    document.getElementById("language-toggle");


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


    // Set HTML language
    document.documentElement.lang =
        language === "jp" ? "ja" : language;


    // Save language
    localStorage.setItem("language", language);


    // Update button
    if (language === "jp") {

        languageToggle.textContent = "JP";

    } else {

        languageToggle.textContent = "EN";

    }

}


// Get saved language
let currentLanguage =
    localStorage.getItem("language") || "en";


// Apply saved language
setLanguage(currentLanguage);


// Language button
languageToggle.addEventListener("click", () => {

    const languages = [
        "en",
        "jp"
    ];


    const currentIndex =
        languages.indexOf(currentLanguage);


    const nextIndex =
        (currentIndex + 1) % languages.length;


    currentLanguage =
        languages[nextIndex];


    pageLoader.classList.remove("hidden");


    setTimeout(() => {

        setLanguage(currentLanguage);

        pageLoader.classList.add("hidden");

    }, 400);

});

/* ========================================
   PAGE LOADER
======================================== */

const pageLoader =
    document.getElementById("page-loader");


/*
    Hide loader when page is ready
*/

window.addEventListener("load", () => {

    setTimeout(() => {

        pageLoader.classList.add("hidden");

    }, 1500);

});

console.log("Kakola World website loaded.");