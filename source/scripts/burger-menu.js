const headerNavigationItem = document.querySelector('.main-header__nav');
const btnBurgerMenu = document.querySelector('.burger-menu');

btnBurgerMenu.addEventListener('click', () => {
  if (headerNavigationItem.classList.contains('main-header__nav--close')) {
    headerNavigationItem.classList.remove('main-header__nav--close');
    btnBurgerMenu.classList.remove('burger-menu--close');
    btnBurgerMenu.classList.add('burger-menu--open');
  } else {
    headerNavigationItem.classList.add('main-header__nav--close');
    btnBurgerMenu.classList.add('burger-menu--close');
    btnBurgerMenu.classList.remove('burger-menu--open');
  }
});
