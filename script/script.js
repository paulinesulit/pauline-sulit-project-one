// Create a drop down menu when hamburger menu is clicked

// 1. Create a variable for the hamburger menu
// 2. Add an event listener, specifically listening for the hamburger menu to be clicked
// 3. Show the drop down menu (add HTML) when clicked

const hamburgerMenu = document.querySelector(".fa-bars");

hamburgerMenu.addEventListener('click', function(event) {

    const dropDownMenu = document.querySelector(".dropDown");
    dropDownMenu.innerHTML = `<li><a href="index.html">HOME</a></li>
                        <li><a href="blog.html">BLOG</a></li>
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        <li>
                            <a href="#shop">SHOP</a>
                        </li>
                        <li>
                            <a href="contact.html">CONTACT</a>
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-search"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-shopping-bag"></i></a>
                        </li>`;
    if (event.target.tagName === "I") {
        menuBar(event.target);
    }

    function menuBar(e) {
        console.log(e);
        e.classList.toggle("fa-bars");
        e.classList.toggle("fa-times");

    }

});