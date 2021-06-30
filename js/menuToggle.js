/* eslint-disable linebreak-style */
const menu = document.querySelector('.mobile-menu');
const openBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');

function openMenu() {
  menu.classList.add('active');
}

function closeMenu() {
  menu.classList.remove('active');
}

export {
  openMenu, closeMenu, openBtn, closeBtn,
};