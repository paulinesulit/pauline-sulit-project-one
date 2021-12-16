// Create a drop down menu when hamburger menu is clicked

// 1. Create a variable for the hamburger menu
// 2. Add an event listener, specifically listening for the hamburger menu to be clicked

const hamburgerMenu = document.querySelector(".fa-bars");

const leftNavBar = document.querySelector('.leftNav');
const rightNavBar = document.querySelector('.rightNav');

hamburgerMenu.addEventListener('click', function(event) {

    if (leftNavBar.style.display === "block" && rightNavBar.style.display === "block") {
        leftNavBar.style.display = "none";
        rightNavBar.style.display = "none";

    } else {
        leftNavBar.style.display = "block";
        rightNavBar.style.display = "block";
    };

});

window.addEventListener("resize", function(e) {
    if (window.innerWidth >= 970) {
        leftNavBar.style.display = "block";
        rightNavBar.style.display = "block";
    } else {
        leftNavBar.style.display = "none";
        rightNavBar.style.display = "none";
    }
});