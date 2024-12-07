const logo = document.querySelector(".header__link");
const originalText = logo.textContent;

logo.addEventListener("mouseover", ()  =>{
    logo.textContent = "ilustrace";
});

logo.addEventListener("mouseout", ()  => {
    logo.textContent = originalText;
});
