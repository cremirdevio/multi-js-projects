// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

let toggleIcon = document.querySelector(".nav-toggle");
let navbar = document.querySelector(".links");
// let navStyle = navbar.style;

toggleIcon.addEventListener("click", controlNav);

function controlNav(){
//    if (navStyle.display == "block"){
//     navStyle.display = "none";
//    } else {
//     navStyle.display = "block";
//    }
   navbar.classList.toggle("navbar-style");
}
//console.log(navbar.classList);