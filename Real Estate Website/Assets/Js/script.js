'use strict';
/*======================*\
# ELEMENT TOGGLE FUNCTION
\*======================*/
const elemToggleFunc = function (elem) {elem.classList.toggle("active");}
/*======================*\
# NAVBAR TOGGLE
\*======================*/
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];
/*======================*\
# CLOSE NAV WHEN  CLICK ON ANY NAVBAR LINK
\*======================*/

for(let i = 0; i < navbarLinks.length; i++){
    navElemArr.push(navbarLinks[i]);
}


/*======================*\
# ADD EVENT ON ALL ELEMENTS FOR TOGGLING NAVBAR
\*======================*/

for(let i = 0; i < navElemArr.length; i++){
    navElemArr[i].addEventListener("click", function(){
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    });
}

console.log("Hello Samn");
