const hamburgerMenu = document.getElementById('hamburger-menu');
const links = document.getElementById('navbar-links');
const header = document.getElementById('header');
const hamburgerLine = document.getElementById('hamburger-line');

let currentWidth = window.innerWidth;
let mobileMenu = false;

document.onclick = function(e){
    if (e.target.id == 'hamburger-line' || e.target.id == 'hamburger-menu'){
        if (mobileMenu == false){
            mobileMenu = true;
        } else {
            mobileMenu = false;
        }
        hamburgerMenu.classList.toggle('active');
        links.classList.toggle('active');
    } else {
        mobileMenu = false;
        hamburgerMenu.classList.remove('active');
        links.classList.remove('active'); 
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth !== currentWidth) {
        currentWidth = window.innerWidth;
        // Code to execute when screen width changes
        if (currentWidth > 900 && mobileMenu == true) {
            hamburgerMenu.classList.remove('active');
            links.classList.remove('active');
            mobileMenu = false;
            console.log(mobileMenu);
        }  
    }
});