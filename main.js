"use strict";

var menuNav = document.getElementById('menu_nav');

var menuTrigger = document.getElementById('menu_trigger');

function menuToggle() {
  if (menuNav.style.display === "flex") {
    menuNav.style.display = "none";
    menuTrigger.style.background = "none";
  } else {
    menuNav.style.display = "flex";
    menuTrigger.style.background = "#79c9a2";
  }
  console.log("The menu has been toggled!")
}

menuTrigger.onclick = menuToggle;

window.onresize = function() {
  if (window.innerWidth >= 750) {
    menuNav.removeAttribute("style");
    menuTrigger.removeAttribute("style");
    header.style.display = 'flex';
    header2.style.display = 'none';
  } ;
}
