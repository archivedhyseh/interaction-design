let nav = document.querySelector('.nav-container');
let hamburger = document.querySelectorAll('.nav-menu-button');

let menuActive = false;

const toggleNavMenu = () => {
  if (!menuActive) {
    nav.classList.toggle('active');
    menuActive = true;
    console.log(menuActive);
  } else {
    nav.classList.toggle('active');
    menuActive = false;
    console.log(menuActive);
  }
};

for (i = 0; i < hamburger.length; i++) {
  hamburger[i].addEventListener('click', toggleNavMenu);
}

window.addEventListener(
  'resize',
  (closeMenuResize = () => {
    if (window.innerWidth >= 768) {
      nav.classList.remove('active');
    }
  })
);
