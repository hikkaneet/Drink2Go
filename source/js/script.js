/* в этот файл добавляет скрипты*/

import { mobileMenu } from './mobile-menu.js';
mobileMenu();

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var slider = document.getElementById('range-slider');
noUiSlider.create(slider, {
    start: [0, 95],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
