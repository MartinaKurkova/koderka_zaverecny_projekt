const logo = document.querySelector(".header__link");
const originalText = logo.textContent;

logo.addEventListener("mouseover", ()  =>{
    logo.textContent = "Kurková Nožičková";
});

logo.addEventListener("mouseout", ()  => {
    logo.textContent = originalText;
});
