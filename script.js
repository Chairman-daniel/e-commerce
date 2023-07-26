// CALLING VARIABLES AND THEIR ELEMENTS

const hambuger = document.querySelector(".hambuger");
const navBar = document.getElementById("navbar");
const navLink = document.querySelector(".nav-link");

// MAKING THE NAVBAR AND NAV LIST APPEAR WHENEEVER WE CLICK THE ICON
hambuger.addEventListener('click', () => {
    navBar.classList.toggle('show');
    hambuger.classList.toggle('show');
});

// MAKING THE NAVBAR EXIT AFTER CLICKING A PARTICULAR NAVLIST

document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
    hambuger.classList.remove("show")
    navBar.classList.remove("show")
    navLink.classList.remove('active')
}));

// MAKING THE ACTIVE CLASS ON ONE OF THE NAVLIST

 navLink.addEventListener("click", () =>{
     navLink.classList.add('active');
 })