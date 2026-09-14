const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});

console.log(menuItems, subMenuTitles);




    //or sectionLinkEls ?? ambot
const navLinkEls = document.querySelectorAll('.artist__link');
const sectionEls = document.querySelectorAll('.section');

let currentSection = 'home'; 
window.addEventListener('scroll', () => {
  sectionEls.forEach(sectionEl => {
    if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 4)) {
      currentSection = sectionEl.id
    }
  });

  navLinkEls.forEach(navLinkEL => {
    if (navLinkEL.href.includes(currentSection)){
      document.querySelector('active').classList.remove('active');
      navLinkEL.classList.add('active');
    }
  });
});


