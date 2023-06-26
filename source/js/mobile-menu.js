export function mobileMenu() {
  let navList = document.querySelector('.main-nav__list');
  let navToggle = document.querySelector('.main-nav__toggle');

  navList.classList.remove('main-nav__list--nojs');
  navToggle.classList.remove('main-nav__toggle--nojs');

  const toggleNavList = () => {
    navList.classList.toggle('main-nav__list--opened');
  };

  const toggleNavToggle = () => {
    navToggle.classList.toggle('main-nav__toggle--opened');
  };

  navToggle.addEventListener('click', toggleNavList);
  navToggle.addEventListener('click', toggleNavToggle);

  const checkWindowSize = () => {
    if (window.innerWidth >= 768) {
      navList.classList.remove('main-nav__list--opened');
      navToggle.classList.remove('main-nav__toggle--opened');
    }
  };

  window.addEventListener('resize', checkWindowSize);
}
