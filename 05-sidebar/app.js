let sideBarToggle = document.querySelector(".sidebar-toggle");
let sideBar = document.querySelector(".sidebar")

sideBarToggle.addEventListener("click", sideBarControl)

function sideBarControl(){
    sideBar.classList.toggle("sidebar_slide");
}


