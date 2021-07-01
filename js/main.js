/* eslint-disable linebreak-style */
import {
  openMenu, openBtn, closeBtn, closeMenu,
} from './menuToggle.js';
import {
  artistGenerator, cardsInfo,
} from './artistsRender.js';

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
artistGenerator(cardsInfo);