const logo = document.querySelector(".header__link");
const originalText = logo.textContent; 

function updateLastName() {
    if (window.innerWidth > 850) {
        logo.textContent = "Martina Kurková Nožičková";
    } else {
        logo.textContent = "Martina Kurková";
    }
}

updateLastName();
window.addEventListener("resize", updateLastName);

logo.addEventListener("mouseover", () => {
    logo.textContent = "ilustrace";
});

logo.addEventListener("mouseout", () => {
    updateLastName();
});

