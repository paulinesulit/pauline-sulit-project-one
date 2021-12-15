// Create a drop down menu when hamburger menu is clicked

// 1. Create a variable for the hamburger menu
// 2. Add an event listener, specifically listening for the hamburger menu to be clicked
// 3. Show the drop down menu (add HTML) when clicked

const hamburgerMenu = document.querySelector(".fa-bars");

const leftNavBar = document.querySelector('.leftNav');
const rightNavBar = document.querySelector('.rightNav');

hamburgerMenu.addEventListener('click', function(event) {
    // const dropDownMenu = document.querySelector(".dropDown");
    // navBar.classList.toggle('dropDown');
    // console.log(navBar);

    //   leftNavBar.style.display = "block";
    //   rightNavBar.style.display = "block";

    if (leftNavBar.style.display === "block" && rightNavBar.style.display === "block") {
        leftNavBar.style.display = "none";
        rightNavBar.style.display = "none";

    } else {
        leftNavBar.style.display = "block";
        rightNavBar.style.display = "block";
    };

    // if (leftNavBar.style.display === "none" && rightNavBar.style.display === "none") {
    //     leftNavBar.style.display = "block";
    //     rightNavBar.style.display = "block";

    // } else {
    //     leftNavBar.style.display = "none";
    //     rightNavBar.style.display = "none";
    // };
});