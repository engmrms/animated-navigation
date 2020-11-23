const menu = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const navList = ['nav1','nav2','nav3','nav4','nav5']


const ToggleNav = ()=>{
menu.classList.toggle("change");
overlay.classList.toggle("overlay-slide-out");
overlay.classList.toggle("overlay-slide-in")
navList.forEach(nav => {
    let element = document.getElementById(nav);
    element.classList.toggle(`slide-in-${nav}`);
    element.classList.toggle(`slide-out-${nav}`);
    
});

}

menu.addEventListener("click",ToggleNav);
navList.forEach(nav => {
    let element = document.getElementById(nav);
       element.addEventListener("click",ToggleNav) 
});