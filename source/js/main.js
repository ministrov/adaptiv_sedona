'use strict';

const burgerBtn = document.querySelector(".main-nav__svg--burger");
const menuCloseBtn = document.querySelector(".main-nav__svg--cross");
const mainNavList = document.querySelector(".main-nav__list");
burgerBtn.onclick = (e) => {
  e.preventDefault();
  if (mainNavList.classList.contains('main-nav--opened')) {
    mainNavList.classList.remove('main-nav--opened');
  } else {
    mainNavList.classList.add('main-nav--opened');
  }
}

menuCloseBtn.onclick = (e) => {
  e.preventDefault();
  mainNavList.classList.remove('main-nav--opened');
}
