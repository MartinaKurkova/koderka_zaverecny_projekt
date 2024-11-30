document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".header__toggle");
    const menu = document.querySelector(".menu");

    toggleButton.addEventListener("click", () => {
        menu.classList.toggle("menu--open");
    });
});
