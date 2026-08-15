console.log("Seto's website loaded.");

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "🌙";
} else {
    themeToggle.textContent = "☀️";
}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    if (isLight) {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }

});