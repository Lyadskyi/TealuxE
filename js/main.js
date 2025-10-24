const menuBtn = document.querySelector('.header-menu__btn');
const menuClose = document.querySelector('.header-menu__close');
const menuList = document.querySelector('.header-menu__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', () => {
	menuList.classList.toggle('header-menu__list--open');
	menuShadow.classList.toggle('menu--open');
});

menuClose.addEventListener('click', () => {
	menuList.classList.remove('header-menu__list--open');
	menuShadow.classList.remove('menu--open');
});
