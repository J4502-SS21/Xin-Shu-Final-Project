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


var dropdown = document.getElementById('dropdownMenu');

dropdown.addEventListener('change', function() {
  //This code will get the option value in the dropdown and create a variable to represent the <section> with that name. And console it out for us.
  var selectedSection = document.getElementById(dropdown.value);
  console.log("The selected value is " + dropdown.value);

  //This code will get the TEXT of that option. And then console it out for us.
  var dropdownText = dropdown.options[dropdown.selectedIndex].text;
  console.log("The text for that value is " + dropdownText);

  //This text will scroll to that section using the variable we created on line 8.
  selectedSection.scrollIntoView({behavior: "smooth"});
});

var mySelect = document.getElementById("mySelect");

var myGallery = document.getElementById("myGallery");

myGallery.style.marginTop = mySelect.offsetHeight + "px";
