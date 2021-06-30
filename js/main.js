/* eslint-disable linebreak-style */
import {
  openMenu, openBtn, closeBtn, closeMenu,
} from './menuToggle.js';

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);