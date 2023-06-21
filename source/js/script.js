/* в этот файл добавляет скрипты*/

import { mobileMenu } from './mobile-menu.js';
import './swiper-bundle.js';

mobileMenu();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
